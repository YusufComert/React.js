import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // Swiper temel stilleri
import "swiper/css/navigation"; // Navigation modülüne ait stiller
import { Box, Typography } from "@mui/material";
import firstSlideImage from "../assets/first-slide.jpg";
import secondSlideImage from "../assets/second-slide.jpg";
import thirdSlideImage from "../assets/third-slide.jpg";
import fourthSlideImage from "../assets/fourth-slide.jpg";

const Slider: React.FC = () => {
  return (
    <Box sx={{ width: "100%", margin: "0 auto", paddingTop: "8px" }}>
      <Swiper
        modules={[Navigation]} // Swiper modülleri (örneğin Navigation)
        navigation // İleri/geri gezinme düğmeleri
        spaceBetween={50} // Slaytlar arasındaki boşluk
        slidesPerView={1} // Aynı anda görünen slayt sayısı
        speed={500} // Geçiş hızı (milisaniye)
        style={{ width: "100%", height: "100%" }} // Swiper yüksekliği
        onSwiper={(swiper) => console.log("Swiper initialized:", swiper)} // Swiper başlatıldığında
        onSlideChange={(swiper) =>
          console.log("Slide index changed to:", swiper.activeIndex)
        } // Slayt değiştiğinde
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: "100%", // Slayt yüksekliğini %100 yaparak ortalamayı sağlar
            position: "relative", // İçerik üzerinde pozisyonlama yapmak için
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "221%",
              position: "relative",
            }}
          >
            <img
              src={firstSlideImage}
              alt="First Slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // Resmi kapsayıcıya uyacak şekilde küçültür ve sığdırır
                borderRadius: "8px", // Köşeleri yuvarlatır
              }}
            />
            <Typography
              variant="h3"
              color="white"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "4px",
                fontWeight: "bold", // Yazıyı kalın yapar
                opacity: 0.8, // Biraz saydamlık verir
                textAlign: "center",
              }}
            >
              HOŞ GELDİNİZ! İHTİYAÇLARINIZA ÖZEL ÇÖZÜMLERLE SİZİ BURADA
              KARŞILAMAKTAN MUTLULUK DUYUYORUZ
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#888",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "221%",
              position: "relative",
            }}
          >
            <img
              src={secondSlideImage}
              alt="Second Slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="h3"
              color="white"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "4px",
                fontWeight: "bold",
                opacity: 0.8,
                textAlign: "center",
              }}
            >
              GELECEĞİNİZİ BİRLİKTE ŞEKİLLENDİRELİM! HEDEFLERİNİZE ULAŞMANIZ
              İÇİN EN DOĞRU ADRES BURASI.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#999",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "221%",
              position: "relative",
            }}
          >
            <img
              src={thirdSlideImage}
              alt="Third Slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="h3"
              color="white"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "4px",
                fontWeight: "bold",
                opacity: 0.8,
                textAlign: "center",
              }}
            >
              SİZİN İÇİN EN İYİ HİZMETİ SUNMAK İÇİN BURADAYIZ. BAŞARIYA GİDEN
              YOLDA YANINIZDAYIZ.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#aaa",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "221%",
              position: "relative",
            }}
          >
            <img
              src={fourthSlideImage}
              alt="Fourth Slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="h3"
              color="white"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "4px",
                fontWeight: "bold",
                opacity: 0.8,
                textAlign: "center",
              }}
            >
              KALİTE, GÜVEN VE YENİLİK BİZİMLE BULUŞUYOR. SİZİ ARAMIZDA
              GÖRMEKTEN MUTLULUK DUYARIZ!
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;
