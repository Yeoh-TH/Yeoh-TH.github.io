import react from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Engineering from './Engineering';
import AppliedResearch from './AppliedResearch';
import WebAndGames from './WebAndGames';
import AwardsHum from "./AwardsHum";
import AwardsAR from "./AwardsAR";
import Publicity from "./Publicity";
import About from './AboutMe';
import Service from './service';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="social-work" element={<Service />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/applied-research" element={<AppliedResearch />} />
        <Route path="/web-and-games" element={<WebAndGames />} />
        <Route path="/awards-ar" element={<AwardsAR />} />
        <Route path="/awards-hum" element={<AwardsHum />} />
        <Route path="/publicity" element={<Publicity />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
