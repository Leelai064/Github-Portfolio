import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavHero from "./components/NavHero";
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import 'bulma/css/bulma.min.css';


const App = () => {
  return (
    <BrowserRouter>
    <NavHero/>
    <Routes>
    <Route path= "/" element = {<Overview/>}/>
    <Route path= "/" element = {<Skills/>}/>
    <Route path= "/" element = {<Projects/>}/>
    <Route path= "/" element = {<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
