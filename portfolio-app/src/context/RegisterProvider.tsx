import React, { createContext, ReactNode, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  Id: string;
  name: string;
  middleName: string;
  surname: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  email: string;
  password: string;
  repassword: string;
}

interface UserProviderProps {
  children: ReactNode;
}

export const RegisterContext = createContext<any>({});

export const RegisterProvider = ({ children }: UserProviderProps) => {
  const [userPersonalInfo, setUserPersonalInfo] = useState<User | null>(null);
  const [userMailInfo, setUserMail] = useState("");
  const [userPasswordInfo, setUserPassword] = useState("");
  const [userNameInfo, setUserNameInfo] = useState("");
  const [userMiddleNameInfo, setUserMiddleNameInfo] = useState("");
  const [userSurnameInfo, setUserSurnameInfo] = useState("");
  const [userPhoneInfo, setUserPhoneInfo] = useState("");
  const [userDateInfo, setUserDateInfo] = useState("");
  const [userRepasswordInfo, setUserRepassword] = useState("");
  const [usergenderInfo, setUserGenderInfo] = useState("");
  const [userSuccessRegister, setUserSuccessRegister] = useState("");

  const Navigate = useNavigate();

  const ControlRegister = async (values: User) => {
    try {
      await axios.post("http://localhost:3000/User", {
        Name: values.name,
        MiddleName: values.middleName,
        Surname: values.surname,
        BirthDate: values.birthDate,
        gender: values.gender,
        PhoneNumber: values.phoneNumber,
        Email: values.email,
        Password: values.password,
      });
      setUserSuccessRegister("Kayıt başarılı! Yönlendiriliyorsunuz...");
      setTimeout(() => Navigate("/LoginUser"), 2000);
    } catch (error) {}
  };

  return (
    <RegisterContext.Provider
      value={{
        userMailInfo,

        setUserNameInfo,
        setUserMiddleNameInfo,
        setUserSurnameInfo,
        setUserPhoneInfo,
        setUserDateInfo,
        setUserMail,
        setUserPassword,
        setUserRepassword,
        setUserGenderInfo,
        ControlRegister,
        userSuccessRegister,
        setUserSuccessRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
