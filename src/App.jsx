import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navbar/navbar.jsx"; // Import Navbar
import Footer from "./Footer/footer.jsx"; // Import Navbar
import Home from "./home/home.jsx"; // Import Home component
import Scrap from "./scrap_rates/scrap.jsx"; // Import scrap component
import Contact from "./contact/contact.jsx"; // Import contact component
import About from "./about/about.jsx"; // Import about component
import Login from "./login/login.jsx"; // Import about component
import Dettail from "./dettail/dettail.jsx";
import SellForm from "./sellYourItem/SellForm.jsx";



const App = () => {
  return (
    <div>
      <Navigation /> {/* Navigation is rendered here */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/scrap" element={<Scrap />} /> {/* Route for scrap */}
        <Route path="/contact" element={<Contact />} /> {/* Route for scrap */}
        <Route path="/about" element={<About />} /> {/* Route for scrap */}
        <Route path="/login" element={<Login />} /> {/* Route for scrap */}
        <Route path="/detail" element={<Dettail />} />
        <Route path="/sell" element={<SellForm />} />
       
        

      </Routes>
      < Footer /> {/* Navigation is rendered here */}
    </div>
  );
};

export default App;
