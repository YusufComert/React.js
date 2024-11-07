import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import meImg from "../assets/furkan.jpg";
import eoreImg from "../assets/emre.jpg";
import yusufImg from "../assets/yusuf.jpg";
import alperenyniImg from "../assets/alperen.jpg";
import memoImg from "../assets/memo.jpg";
import bugraImg from "../assets/bugra.jpg";

interface Member {
  id: number;
  name: string;
  age: number;
  image: string;
  career: string;
}

function OurTeamAdmin() {
  const [members, setMembers] = useState<Member[]>([]);
  const navigate = useNavigate();

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

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3000/members/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setMembers(members.filter((member) => member.id !== id));
        navigate("/");
      }
    });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ marginTop: 10 }}>
        {members.map((member) => (
          <Grid key={member.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={imageMap[member.id]}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Yaş: {member.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Kariyer: {member.career}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(member.id)}
                >
                  Sil
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OurTeamAdmin;
