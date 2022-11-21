import axios from "axios";
import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
  children: ReactNode;
};

interface UserData {
  id: number;
  username: string;
  accountId: {
    id: number;
    balance: number;
  };
}

type AuthContextType = {
  isUserLoggedIn: boolean | undefined;
  setIsUserLoggedIn: (isUserLoggedIn: boolean | undefined) => void
  userData: UserData | null | undefined;
  authenticate: () => Promise<boolean | undefined>;
  login: (username: string, password: string) => Promise<boolean | undefined>;
  clearToken: () => void;
};

const initialValue = {
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => false,
  userData: null,
  authenticate: async () => false,
  login: async () => false,
  clearToken: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | undefined>()
  const [userData, setUserData] = useState<null | UserData>();

  const authenticate = async () => {
    try {
      let res = await axios.get("http://localhost:8080/authenticate", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setUserData(await res.data);
      setIsUserLoggedIn(true);
      return true;
    } catch (err) {
      setIsUserLoggedIn(false);
      return false;
    }
  };

  const login = async (username: string, password: string) => {
    try {
      let res = await axios.post("http://localhost:8080/authenticate", {
        username: username,
        password: password,
      });
      if (await res.data) {
        localStorage.setItem("token", `Bearer ${await res.data.token}`);
        return true;
      }
    } catch (err) {
      return false;
    }
  };

  const clearToken = () => {
    // localStorage.removeItem("token");
    localStorage.setItem("token", '');
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        userData,
        login,
        clearToken,
        authenticate,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
