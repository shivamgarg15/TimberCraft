import './App.css';
import BgBanner from './Components/BgBanner';
import Body1 from './Components/Body1';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Components/About';
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const scrollToTop = ()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <Router>
      <Navbar scrollToTop={scrollToTop}/>
      <Routes >
        <Route exact path='/' element={<><BgBanner/><Body1/></>}/>
        <Route exact path='/home' element={<><BgBanner/><Body1/></>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
