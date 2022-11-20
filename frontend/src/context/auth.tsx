import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

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
  isUserLogged: boolean;
  userData: UserData | null | undefined;
};

const initialValue = {
  isUserLogged: false,
  userData: null,
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [isUserLogged, setIsUserLogged] = useState(initialValue.isUserLogged);
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    axios
      .get("http://localhost:8080/authenticate", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(async (res) => {
        const data: null | UserData = await res.data;
        setUserData(data);
        setIsUserLogged(true);
      });
  }, []);

  return <AuthContext.Provider value={{ isUserLogged, userData }}>{children}</AuthContext.Provider>;
};
