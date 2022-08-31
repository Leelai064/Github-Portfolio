import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
    <NavHero/>
    <Routes>
    <Route path= "/" element = {<Overview/>}/>
    <Route path= "/Skills" element = {<Skills/>}/>
    <Route path= "/Projects" element = {<Projects/>}/>
    <Route path= "/About" element = {<About/>}/>
    </Routes>
    <Footer/>
    </Router>
   
  );
};

export default App;
