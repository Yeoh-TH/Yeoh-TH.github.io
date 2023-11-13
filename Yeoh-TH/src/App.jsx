import react from 'react'
import { Routes,Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Projects from "./Projects";
import Projects2023 from './Projects2023';
import Projects2022 from './Projects2022';
import Awards from "./Awards";

const App = () =>{
  return(
  <>
  <Routes>
    <Route path="/" exact element={<Homepage/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/projects/2022" element={<Projects2022/>}/>
    <Route path="/projects/2023" element={<Projects2023/>}/>
    <Route path="/awards" element={<Awards/>}/>
  </Routes>
  </>
  )
}

export default App
