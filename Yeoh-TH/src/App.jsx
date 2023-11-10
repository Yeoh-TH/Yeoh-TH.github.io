import react from 'react'
import { Routes,Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Projects from "./Projects";
import Awards from "./Awards";

const App = () =>{
  return(
  <>
  <Routes>
    <Route path="/" exact element={<Homepage/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/awards" element={<Awards/>}/>
  </Routes>
  </>
  )
}

export default App
