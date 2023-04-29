import './App.css';
import BgBanner from './Components/BgBanner';
import Body1 from './Components/Body1';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route exact path='/' element={<><BgBanner/><Body1/></>}/>
        <Route exact path='/home' element={<><BgBanner/><Body1/></>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
