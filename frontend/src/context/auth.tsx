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
  userData: UserData | null | undefined;
  authenticate: () => Promise<boolean | undefined>;
  login: (username: string, password: string) => Promise<boolean | undefined>;
  clearToken: () => void;
};

const initialValue = {
  userData: null,
  authenticate: async () => false,
  login: async () => false,
  clearToken: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [userData, setUserData] = useState<null | UserData>();

  const authenticate = async () => {
    try {
      let res = await axios.get("http://localhost:8080/authenticate", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setUserData(await res.data);
      return true;
    } catch (err) {
      console.log(err);
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
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        login,
        clearToken,
        authenticate,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
