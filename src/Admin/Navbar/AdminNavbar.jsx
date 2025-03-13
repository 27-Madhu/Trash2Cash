import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./adminNavbar.module.css";
import Img from "../../all_image/girl.png"; // ✅ Correct Path
const AdminNavbar = () => {
  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 bg text-white ${style.nav}`}>
      <img  className={`${style.adminImg}`} src={Img} alt="img"/>
      <p>Admin Name</p>
      <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
          <Link to="/adminapp" className={`nav-link  text-white ${style.navlink}`}>Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/adminapp/register" className={`nav-link  text-white ${style.navlink}`}>Register Data</Link>
        </li>
        <li>
          <Link to="/adminapp/scrap_rate_msg" className={`nav-link  text-white ${style.navlink}`}>Scrap Rate Manager</Link>
        </li>
        <li>
          <Link to="/adminapp/order" className={`nav-link  text-white ${style.navlink}`}>Orders Management</Link>
        </li>
        <li>
          <Link to="/adminapp/contact" className={`nav-link  text-white ${style.navlink}`}>Content Management</Link>
        </li>
        <li>
          <Link to="/adminapp/testimonials" className={`nav-link  text-white ${style.navlink}`}>Testimonials</Link>
        </li>
       
        <li>
          <Link to="/" className={`nav-link  text-white ${style.navlink}`}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};



export default AdminNavbar;