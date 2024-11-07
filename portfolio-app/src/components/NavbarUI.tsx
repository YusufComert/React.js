import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed" // Sayfanın üst kısmına sabitler
        sx={{
          top: 0, // Üstte sabitler
          bgcolor: "#212121",
          padding: "12px 0",
          width: "100%",
          zIndex: 1100, // Diğer içeriklerin üzerinde görünmesini sağlar
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            LOGO
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: "20px",
              marginLeft: "100px",
              marginRight: "auto",
            }}
          >
            {["Anasayfa", "Hizmetlerimiz", "Hakkimizda", "Iletisim"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    textShadow: "2px 2px 4px rgba(255, 255, 255, 0.6)",
                    "&:hover": {
                      textShadow: "4px 4px 8px rgba(255, 255, 255, 1)",
                      transform: "scale(1.25)",
                      transition: "all 0.5s ease-in",
                    },
                  }}
                >
                  <Button color="inherit">{item}</Button>
                </Link>
              )
            )}
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button
              color="inherit"
              sx={{
                textShadow: "2px 2px 4px rgba(255, 255, 255, 0.6)",
                "&:hover": {
                  textShadow: "4px 4px 8px rgba(255, 255, 255, 1)",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{
                textShadow: "2px 2px 4px rgba(255, 255, 255, 0.6)",
                "&:hover": {
                  textShadow: "4px 4px 8px rgba(255, 255, 255, 1)",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "64px" }} />{" "}
      {/* Navbar'ın yüksekliği kadar bir boşluk bırakır */}
    </Box>
  );
}

export default Navbar;
