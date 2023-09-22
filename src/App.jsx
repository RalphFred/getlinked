import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";

import PreLoader from "./animations/PreLoader/PreLoader";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    AOS.init({
      
    });
  }, []);
  
  return (
    <>
      <PreLoader />
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </>
  );
}
