import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavbarUI";
import Footer from "./components/FooterUI";
import Home from "./components/Home";
import OurServices from "./components/OurServicesUI";
import ContactForm from "./components/ContactForm";
import ContactProvider from "./context/ContactProvider";
import OurTeamC from "./components/OurTeamC";
import LoginUser from "./components/LoginUser";

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === "/iletisim";

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/hizmetlerimiz" element={<OurServices />} />

        <Route
          path="/iletisim"
          element={
            <ContactProvider>
              <ContactForm showMap={isContactPage} />
            </ContactProvider>
          }
        />
        <Route path="/hakkimizda" element={<OurTeamC />} />
        <Route path="/login" element={<LoginUser />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
