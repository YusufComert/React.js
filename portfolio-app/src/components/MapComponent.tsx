import React from "react";
import { Box, Typography } from "@mui/material";

const MapComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#f5f5f5", // Harita etrafında hafif bir arka plan rengi
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 15px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ marginBottom: "20px" }}
      >
        ADRESİMİZ
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.844857051581!2d29.00733391224198!3d41.11936217121558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5b39cefc5e3%3A0xee4f06a4f79630ce!2sAcunmedya%20Akademi!5e1!3m2!1str!2str!4v1725475533851!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: "0", borderRadius: "8px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapComponent;
