import { Container, Stack } from "@mui/material";
import React from "react";
import Card from "./PacketsUI";
import Servicesİnfo from "./ServicesInfo";

const OurServices = () => {
  return (
    <Container>
      <Servicesİnfo />
      <Servicesİnfo />
      <Container
        sx={{
          mt: 10,
          mb: 10,
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          borderRadius: "20px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center" // Card bileşenini yatayda ortalar
          alignItems="center" // Card bileşenini dikeyde ortalar
          sx={{ marginTop: "10px" }}
        >
          <Card />
        </Stack>
      </Container>
    </Container>
  );
};

export default OurServices;
