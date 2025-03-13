import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./Navbar/AdminNavbar"; 
import AdminHome from "./Home/AdminHome"; 
import RegisterData from "./RegisterData/registerData"; 
import ScrapRatesManagement from "./scrapRate/scrapRateMsg"
const AdminApp = () => {
  return (
    <div className="d-flex">
      {/* Admin Sidebar */}
      <AdminNavbar /> 

      {/* Admin Content Area */}
      <div className="content p-3" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/register" element={<RegisterData />} />
          <Route path="/scrap_rate_msg" element={<ScrapRatesManagement/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;
