import "./App.css";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Navbar from "./Components/Navbar.js";
import Portfolio from "./Components/Portfolio.js";
import Role from "./Components/Role.js";
import Skills from "./Components/Skills.js";


function App() {

  return (
    <>
      <Navbar/>
      <Role/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;



