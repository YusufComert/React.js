import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          consectetur temporibus accusamus ipsa voluptate eius ipsam incidunt
          tempore dolores? Totam cumque temporibus ducimus suscipit consequatur!
          Ea nobis hic tempore suscipit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque nobis repudiandae, sint aut sapiente qui
          eveniet. Accusantium molestias mollitia at officia autem, dolorum
          earum suscipit libero, a ipsum incidunt similique. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Voluptas minima provident
          tenetur rerum. Doloribus omnis, libero placeat, tempore unde similique
          enim modi optio dolor, culpa rerum iusto distinctio? Ipsa, voluptas?
        </p>
      </div>
    </div>
  );
};

export default About;
