import React, { createContext, ReactNode, useState } from "react";
import axios from "axios";

interface User {
  Id: number;
  Name: string;
  Surname: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<any>({});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userPersonalInfo, setUserPersonalInfo] = useState<User | null>(null);
  const [userMailInfo, setUserMail] = useState("");
  const [userPasswordInfo, setUserPassword] = useState("");
  const [userWrongLogin, setUserWrongLogin] = useState("");

  const ControlLoginUser = async () => {
    try {
      const response = await axios.get<User[]>("http://localhost:3000/User");
      console.log("Veriler:", response.data);
      console.log("E-posta:", userMailInfo);
      console.log("Şifre:", userPasswordInfo);
      const matchedUser = response.data.find(
        (user) =>
          user.Email === userMailInfo && user.Password === userPasswordInfo
      );
      debugger;
      if (matchedUser) {
        setUserPersonalInfo(matchedUser);
        console.log("Login başarılı");
        setUserWrongLogin("");
      } else {
        console.log("Login başarısız");

        setUserWrongLogin("Girilen bilgiler yanlış");
        debugger;
      }
    } catch (error) {
      console.error("Admin kontrolü sırasında bir hata oluştu", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userMailInfo,
        setUserMail,
        userPasswordInfo,
        setUserPassword,
        ControlLoginUser,
        userWrongLogin,
        setUserWrongLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
