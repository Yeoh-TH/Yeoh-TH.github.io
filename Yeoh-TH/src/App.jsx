import react from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Engineering from './EngineeringStuff';
import WebAndGames from './AppliedResearch';
import AppliedResearch from './WebAndGames';
import AwardsHum from "./AwardsHum";
import AwardsAR from "./AwardsAR";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/applied-research" element={<AppliedResearch />} />
        <Route path="/web-and-games" element={<WebAndGames />} />
        <Route path="/awards-hum" element={<AwardsHum />} />
        <Route path="/awards-ar" elment={<AwardsAR />} />
      </Routes>
    </>
  )
}

export default App
