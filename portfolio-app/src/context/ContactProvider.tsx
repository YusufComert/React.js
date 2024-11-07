import { createContext, ReactNode, useState } from "react";
import axios from "axios";

export const ContactContext = createContext<any>({});

interface FormValues {
  id: number;
  name: string;
  surname: string;
  email: string;
  message: string;
}

interface ContactProviderProps {
  children: ReactNode;
}

function ContactProvider({ children }: ContactProviderProps) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useState<FormValues[]>([]);

  const Print = () => {
    console.log(name, surname, email, message);
  };

  const SendContactInfo = async (values: FormValues) => {
    try {
      await axios.post("http://localhost:3000/Contact", {
        name: values.name,
        surname: values.surname,
        email: values.email,
        message: values.message,
      });
    } catch (error) {
      console.error("İletişim bilgileri gönderilirken bir hata oluştu:", error);
    }
  };
  const FetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Contact");
      console.log(response.data);
      setContacts(await response.data);
    } catch (error) {
      console.error("İletişim bilgileri getirilirken bir hata oluştu:", error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        setName,
        setSurname,
        setEmail,
        setMessage,
        Print,
        SendContactInfo,
        FetchContacts, // Yeni eklenen fonksiyon
        contacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
