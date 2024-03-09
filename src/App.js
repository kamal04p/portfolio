import "./App.css";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
import Portfolio from "./Components/Portfolio.js";
import Role from "./Components/Role.js";
import Skills from "./Components/Skills.js";
import { BrowserRouter } from "react-router-dom";




function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Role/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;



