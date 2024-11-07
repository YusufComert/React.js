import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const AboutComp: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginY: "60px" }}>
      {/* İlk Bölüm: Sol Resim, Sağ Yazı */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://picsum.photos/seed/picsum/600/400"
            alt="About Us"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333", marginBottom: "20px" }}
            >
              Hakkımızda
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{ color: "#666", lineHeight: "1.6", fontSize: "1.2rem" }}
            >
              <span style={{ fontSize: "15px", fontWeight: "bolder" }}>
                Uygun Fiyatlı Web Sitesi ve Mobil Uygulama Çözümleri
              </span>
              <br />
              Günümüz dijital dünyasında etkili bir çevrimiçi varlık oluşturmak,
              işinizin başarısı için kritik öneme sahiptir. Biz, hem web sitesi
              hem de mobil uygulama geliştirme hizmetlerinde size uygun
              fiyatlarla profesyonel çözümler sunuyoruz. Amacımız, işletmenizin
              ihtiyaçlarını karşılayan yüksek kaliteli dijital ürünler üretirken
              bütçenizi korumaktır. Web siteniz, kullanıcı dostu arayüzü ve
              modern tasarımıyla çevrimiçi görünürlüğünüzü artıracak; mobil
              uygulamanız ise kullanıcılarınıza her an, her yerde erişim imkanı
              sağlayacaktır. Deneyimli ekibimiz, projelerinizi zamanında ve
              beklentilerinizi aşan bir şekilde tamamlamak için çalışır. İster
              bir iş platformu, ister bir e-ticaret sitesi, ya da mobil uygulama
              geliştirme ihtiyacınız olsun, size uygun fiyatlarla etkili
              çözümler sunmak için buradayız.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginTop: "40px" }}
      >
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
          <Box
            component="img"
            src="https://picsum.photos/seed/picsum/600/400"
            alt="Additional Info"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
          <Box sx={{ padding: "20px" }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333", marginBottom: "20px" }}
            >
              BİZ KİMİZ ?
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{ color: "#666", lineHeight: "1.6", fontSize: "1.2rem" }}
            >
              Biz, hem web sitesi hem de mobil uygulama geliştirme hizmetlerinde
              size uygun fiyatlarla profesyonel çözümler sunuyoruz. Amacımız,
              işletmenizin ihtiyaçlarını karşılayan yüksek kaliteli dijital
              ürünler üretirken bütçenizi korumaktır. Web siteniz, kullanıcı
              dostu arayüzü ve modern tasarımıyla çevrimiçi görünürlüğünüzü
              artıracak; mobil uygulamanız ise kullanıcılarınıza her an, her
              yerde erişim imkanı sağlayacaktır. Deneyimli ekibimiz,
              projelerinizi zamanında ve beklentilerinizi aşan bir şekilde
              tamamlamak için çalışır.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutComp;
