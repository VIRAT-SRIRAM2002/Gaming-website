import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home/Home";
import PcMac from "./PcMac/PcMac";
import Mobgames from "./Mobilegames/Mobgames";
import Console from "./ConsoleGames/Console";
import Contact from "./Contact/Contact";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import About from "./About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pcmac" element={<PcMac />} category="pcmac" />
          <Route path="mobgames" element={<Mobgames />} category="mobgames" />
          <Route path="console" element={<Console />} category="console" />
          <Route path="contact" element={<Contact />} category="contact" />
          <Route
            path="privacy"
            element={<PrivacyPolicy />}
            category="privacy"
          />
          <Route path="aboutus" element={<About />} category="aboutus" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
