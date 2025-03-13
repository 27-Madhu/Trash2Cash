import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./navbar/navbar.jsx"; 
import Footer from "./Footer/footer.jsx"; 

// Pages
import Home from "./home/home.jsx"; 
import Scrap from "./scrap_rates/scrap.jsx"; 
import Contact from "./contact/contact.jsx"; 
import About from "./about/about.jsx"; 
import Login from "./login/login.jsx"; 
import Dettail from "./dettail/dettail.jsx"; 
import SellForm from "./sellYourItem/SellForm.jsx"; 
import WasteCollection from './servies/waste-collation.jsx';
import Wastecategories from './servies/waste-categories.jsx';
import UserCard from './User_profile/user.jsx';

// ✅ Import Admin Page
import AdminApp from "./Admin/AdminApp.jsx";

const App = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/adminapp");

  return (
    <div>
      {!isAdminPage && <Navigation />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Dettail />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/waste-coll" element={<WasteCollection />} />
        <Route path="/waste-cate" element={<Wastecategories />} />
        <Route path="/usercard" element={<UserCard />} />
        

        {/* ✅ Fix: Admin Nested Routes */}
        <Route path="/adminapp/*" element={<AdminApp />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </div>
  );
};

export default App;
