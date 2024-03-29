import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../logo/Logo";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import home_1 from "../Assets/home_1.jpeg";
import home_2 from "../Assets/home_2.jpeg";
import home_3 from "../Assets/home_3.jpeg";
import home_4 from "../Assets/home_4.jpeg";
import game_1 from "../Assets/game_1.jpeg";
import game_3 from "../Assets/game_3.jpeg";
import game_11 from "../Assets/game_11.jpeg";
import game_10 from "../Assets/game_10.jpeg";
import Weather from "../Weather/Weather";

const Home = () => {
  const [menu, setmenu] = useState("home");
  const [citySearch, setCitySearch] = useState("");
  const [cityData, setCityData] = useState(null);

  const fetchCity = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=OLcWeNMV32E3haKDDgvgCMRhzoAGqZVs&q=${citySearch}`
      )
      .then((res) => {
        setCityData(res.data[0]);
        setCitySearch("");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="main">
      <Logo />
      <div className="wrapper">
        <form
          className="form-groupcustom-form"
          autoComplete="off"
          onSubmit={fetchCity}
        >
          <label>Search for a city to get weather data</label>
          <div className="search-box">
            <input
              className="form-control"
              required
              placeholder="Enter city name..."
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
            />
            <button type="submit" className="btn-secondarybtn-sm">
              <Icon icon={search} size={22} />
            </button>
          </div>
        </form>

        {cityData && (
          <div style={{ padding: 10 + "px", width: 100 + "%" }}>
            <Weather cityData={cityData} />
          </div>
        )}
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setmenu("home");
          }}
        >
          <Link to="/" className="link">
            Home
          </Link>
          <hr />
          {menu === "home"}
        </li>
        <li
          onClick={() => {
            setmenu("pcmac");
          }}
        >
          <Link to="pcmac" className="link">
            PC/MacGames
          </Link>
          <hr />
          {menu === "pcmac"}
        </li>
        <li
          onClick={() => {
            setmenu("mobgames");
          }}
        >
          <Link to="mobgames" className="link">
            MobileGames
          </Link>
          <hr />
          {menu === "mobgames"}
        </li>
        <li
          onClick={() => {
            setmenu("console");
          }}
        >
          <Link to="console" className="link">
            ConsoleGames
          </Link>
          <hr />
          {menu === "console"}
        </li>
      </ul>
      <h1 className="h1-1">PopularGames</h1>
      <div className="homeimg">
        <img src={home_1} alt="" />
        <img src={home_2} alt="" />
        <img src={home_3} alt="" />
        <img src={home_4} alt="" />
      </div>
      <h1 className="h1-2">MobileGames</h1>
      <div className="homeimg2">
        <img src={game_1} alt="" />
        <img src={game_3} alt="" />
        <img src={game_10} alt="" />
        <img src={game_11} alt="" />
      </div>
      <hr />
      <div className="footer">
        <ul className="footer-links">
          <li
            onClick={() => {
              setmenu("privacy");
            }}
          >
            <Link to="privacy" className="link">
              PrivacyPolicy
            </Link>
            {menu === "privacy"}
            <hr />
          </li>
          <li
            onClick={() => {
              setmenu("aboutus");
            }}
          >
            <Link to="aboutus" className="link">
              AboutUs
            </Link>
            {menu === "aboutus"}
            <hr />
          </li>
          <li
            onClick={() => {
              setmenu("contact");
            }}
          >
            <Link to="contact" className="link">
              ContactUs
            </Link>
            <hr />
            {menu === "contact"}
          </li>
        </ul>
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
          <div className="visit">
            <a href="#">
              Visit my page <span>Gamersgalaxy.co</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
