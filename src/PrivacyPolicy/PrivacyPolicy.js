import React from "react";
import "./PrivacyPolicy.css";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import privacy_1 from "../Assets/privacy_1.png";
import privacy_2 from "../Assets/privacy_2.png";
const PrivacyPolicy = () => {
  return (
    <div className="policy">
      <h1>PRIVACY POLICY</h1>
      <img src={privacy_2} alt="" />
      <p>
        In many of our games, we use cookies stored on your computer to save
        game data. This means when you exit the game and come back, all of your
        game data can be restored.If you want to disable cookies, and this
        ability to save game data, you can do so by going into the preferences
        or settings menu on your browser.We will never sell your data to anyone,
        mainly because nobody would ever want to buy or even see it. We don't
        want to see it. It just helps the website to run smoothly.
      </p>
      <div className="icon">
        <img src={privacy_1} alt="" />
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
