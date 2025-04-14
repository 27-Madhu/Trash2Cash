import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterData = () => {
  const [registers, setRegister] = useState([]);

  // Fetch registered users
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/registers")
      .then((response) => setRegister(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Delete handler
  const handleDelete = (id) => {
    console.log("🛑 Trying to Delete User with ID:", id);

    axios
      .delete(`http://localhost:3001/admin/registers/${id}`)
      .then(() => {
        console.log("✅ User Deleted Successfully!");
        setRegister((prevRegisters) =>
          prevRegisters.filter((register) => register._id !== id)
        );
      })
      .catch((err) =>
        console.log(
          "❌ Error deleting user:",
          err.response?.data || err.message
        )
      );
  };

  return (
    <div className="container mt-5" style={{ marginLeft: "250px" }}>
      <h2
        className="text-center"
        style={{
          position: "fixed",
          top: 0,
          left: "250px",
          width: "100%",
          backgroundColor: "orange",
          padding: "10px",
          color: "white",
          zIndex: 1000,
        }}
      >
        Registered Users
      </h2>
      <table className="table table-bordered table-striped mt-4">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>City</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {registers.length > 0 ? (
            registers.map((register) => (
              <tr key={register._id}>
                <td>{register._id}</td>
                <td>{register.fname}</td>
                <td>{register.lname}</td>
                <td>{register.email}</td>
                <td>{register.phone}</td>
                <td>{register.address}</td>
                <td>{register.pincode}</td>
                <td>{register.city}</td>
                <td>{register.password}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(register._id)} // ✅ Fixed this line
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center text-danger">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterData;