import React, { createContext, ReactNode, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Admin {
  Id: string;
  Name: string;
  Surname: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
  AdminId: string;
}

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminContext = createContext<any>({});

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const [adminId, setAdminId] = useState("");
  const [adminMailInfo, setAdminMail] = useState("");
  const [adminPasswordInfo, setAdminPassword] = useState("");
  const [adminWrongLogin, setAdminWrongLogin] = useState("");

  const navigate = useNavigate();

  const ControlLoginAdmin = async () => {
    try {
      const response = await axios.get<Admin[]>("http://localhost:3000/Admin");
      console.log("Veriler:", response.data);
      console.log("E-posta:", adminMailInfo);
      console.log("Şifre:", adminPasswordInfo);
      if (!adminMailInfo || !adminPasswordInfo) {
        console.log("E-posta veya şifre bilgileri mevcut değil");
        return;
      }
      const matchedAdmin = response.data.find(
        (admin) =>
          admin.Email === adminMailInfo && admin.Password === adminPasswordInfo
      );
      debugger;
      if (matchedAdmin) {
        console.log("Login başarılı");
        setAdminId(matchedAdmin.Id);
        setAdminWrongLogin("");
        navigate("/Admin");
      } else {
        console.log("Login başarısız");

        setAdminWrongLogin("Girilen bilgiler yanlış");
      }
    } catch (error) {
      console.error("Admin kontrolü sırasında bir hata oluştu", error);
    }
  };

  const FetchAdminInfo = async () => {
    try {
      const response = await axios.get<Admin[]>("http://localhost:3000/Admin");
      const matchedAdmin = await response.data.find(
        (admin) => admin.Id === adminId
      );
    } catch (error) {}
  };

  return (
    <AdminContext.Provider
      value={{
        adminMailInfo,
        setAdminMail,
        adminPasswordInfo,
        setAdminPassword,
        ControlLoginAdmin,
        adminWrongLogin,
        setAdminWrongLogin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
