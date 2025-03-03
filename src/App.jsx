import React from "react";

import { Routes, Route } from "react-router-dom";
import Navigation from "./navbar/navbar.jsx"; // Import Navbar
import Footer from "./Footer/footer.jsx"; // Import Footer
import Home from "./home/home.jsx"; // Import Home component
import Scrap from "./scrap_rates/scrap.jsx"; // Import Scrap component
import Contact from "./contact/contact.jsx"; // Import Contact component
import About from "./about/about.jsx"; // Import About component
import Login from "./login/login.jsx"; // Import Login component
import Dettail from "./dettail/dettail.jsx"; // Import Detail component
// import SellForm from "./sellYourItem/SellForm.jsx"; // Import Sell Form component
// import WasteCollection from './servies/waste-collation.jsx'; // Import'
// import Wastecategories from './servies/waste-categories.jsx';
// import UserCard from './User_profile/user.jsx';
const App = () => {
  return (
    <div>
      <Navigation /> {/* Navigation is rendered here */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/scrap" element={<Scrap />} /> {/* Route for Scrap */}
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
        <Route path="/about" element={<About />} /> {/* Route for About */}
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
        <Route path="/detail" element={<Dettail />} /> {/* Route for Detail */}
        {/* <Route path="/sell" element={<SellForm />} /> Route for Sell */}
        {/* <Route path="/waste-coll" element={<WasteCollection />} /> 
        <Route path="/waste-cate" element={<Wastecategories />} /> 
        <Route path="/usercard" element={<UserCard />} /> */}
      </Routes>

      <Footer /> {/* Footer is rendered here */}
    </div>
  );
};

export default App;
Wastecategories