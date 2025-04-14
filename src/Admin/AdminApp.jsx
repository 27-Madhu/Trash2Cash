import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./Navbar/AdminNavbar"; 
import AdminHome from "./Home/AdminHome"; 
import RegisterData from "./RegisterData/registerData"; 
import ScrapRatesManagement from "./scrapRate/scrapRateMsg";
import OrderManagement from "./OrderManagement/orderManagement";
import MakePayment from "./OrderManagement/MakePayment";
import ContactManagement from "./Contact/ContactManagement ";
import TestimonialManagement from "./Testomonial/TestimonialManagement";
const AdminApp = () => {
  return (
    <div className="d-flex">
      {/* Admin Sidebar */}
      <AdminNavbar /> 

      {/* Admin Content Area */}
      <div className="content p-3" style={{ flex: 1 }}>
        <Routes>
          <Route path="/*" element={<AdminHome />} />
          <Route path="/register" element={<RegisterData />} />
          <Route path="/scrap_rate_msg" element={<ScrapRatesManagement/>} />
          <Route path="/order" element={<OrderManagement/>} />
          <Route path="/make-payment" element={<MakePayment/>} />
          <Route path="/contact" element={<ContactManagement/>} />
          <Route path="/testimonials" element={<TestimonialManagement/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;
