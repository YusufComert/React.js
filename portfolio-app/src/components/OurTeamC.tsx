import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import meImg from "../assets/furkan.jpg";
import eoreImg from "../assets/emre.jpg";
import yusufImg from "../assets/yusuf.jpg";
import alperenyniImg from "../assets/alperen.jpg";
import memoImg from "../assets/memo.jpg";
import bugraImg from "../assets/bugra.jpg";
import AboutComp from "./AboutComp";

interface Member {
  id: number;
  name: string;
  age: number;
  image: string;
  career: string;
}

const Team: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/members")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error("Üyeler alınırken hata:", error));
  }, []);

  const imageMap: { [key: number]: string } = {
    1: meImg,
    2: eoreImg,
    3: yusufImg,
    7: alperenyniImg,
    5: memoImg,
    6: bugraImg,
  };

  return (
    <Container maxWidth="lg">
      <AboutComp />
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        {members.map((member) => (
          <Grid key={member.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <img
                src={imageMap[member.id]}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "250px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <CardContent sx={{ textAlign: "center", padding: "16px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ marginTop: "8px", color: "#666" }}
                >
                  Yaş: {member.age}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ marginTop: "4px", color: "#666" }}
                >
                  Kariyer: {member.career}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;
