// src/pages/ResetPassword.jsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setMessage("❌ Passwords do not match");
    }

    try {
      const res = await axios.post("http://localhost:3001/api/auth/reset-password", {
        token,
        password
      });

      setMessage(res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center" style={{marginTop: "100px"}}> 
      <h2>🔐 Reset Password</h2>
      <form onSubmit={handleReset}>
        <div className="mb-2" >
            <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div className="mb-2" >
            <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
        </div>
        <div className="mb-2" >
            <button type="submit">Reset Password</button>
            {message && <p>{message}</p>}
        </div>
        
      </form>
    </div>
  );
};

export default ResetPassword;
