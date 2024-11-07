import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçiniz</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı Soyadınızı Giriniz"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen Email'inizi Giriniz"
          />
          <label>Mesajınız</label>
          <textarea
            rows="6"
            type="text"
            name="message"
            placeholder="Lütfen Mesajınızı Giriniz"
          ></textarea>
        </form>

        <button className="red-button">Gönder</button>
      </div>
    </div>
  );
};

export default Contact;
