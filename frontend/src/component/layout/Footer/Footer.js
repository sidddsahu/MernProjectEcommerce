import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Mesiddhantsahu</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/____s_i_d_d_h_a_n_t___/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCEibYL6tJ0g0vBFMZtML2rQ">Youtube</a>
        <a href="https://www.instagram.com/____s_i_d_d_h_a_n_t___/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
