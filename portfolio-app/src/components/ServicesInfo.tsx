import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Servicesİnfo = () => {
  return (
    <Container
      sx={{
        mt: 10,
        mb: 10,

        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        borderRadius: "20px",
        p: 10,
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            component="img"
            src="https://picsum.photos/400/300?grayscale"
            alt="Service Image"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Paper
            sx={{
              p: 3,
              bgcolor: "background.default",
              borderRadius: "15px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: "15px",
                color: "primary.default",
                textAlign: "center",
              }}
            >
              HİZMETLERİMİZ
            </Typography>

            <Typography variant="body1" component="p" sx={{ fontSize: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              officiis minus quod molestias inventore illum dolore. Voluptates,
              nulla inventore. Vitae, iure ratione. Corporis porro quaerat,
              repellat enim eveniet repellendus autem.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Servicesİnfo;
