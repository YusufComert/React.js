import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";

function Footer() {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{ top: "auto", bottom: 0, bgcolor: "#212121" }} // AppBar ile aynı renkte
    >
      <CssBaseline />
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mt: 1 }}>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="inherit" sx={{ mt: 2, mb: 2 }}>
            <Link href="/contact" color="inherit">
              <Button color="inherit">Bizimle İletişime Geç</Button>
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="inherit"
            sx={{ marginBottom: 3 }}
            fontSize={18}
          >
            {"© "}
            REACT TEAM | TÜM HAKLARI SAKLIDIR.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
