import { Box } from "@mui/material";
import Slider from "./Slider";
import OurTeam from "./OurTeam";
import Packets from "./PacketsUI";
import Servicesİnfo from "./ServicesInfo";
import ContactForm from "./ContactForm";
import ContactProvider from "../context/ContactProvider";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Bu satır tüm bileşenleri yatay olarak ortalar
        marginBottom: "25px",
      }}
    >
      <Slider />
      <Servicesİnfo />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Packets />
      </Box>
      <h1
        style={{
          textAlign: "center",
          width: "100%",
          marginTop: "15px",
        }}
      >
        TAKIMIMIZ
      </h1>
      <OurTeam />
      <Box sx={{ margin: "35px" }}>
        <ContactProvider>
          <ContactForm />
        </ContactProvider>
      </Box>
    </Box>
  );
}

export default Home;
