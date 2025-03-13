import React, { useEffect, useState } from "react";

export default function RegisterData() {
  const [users, setUsers] = useState([]);

  // 🔹 API से डेटा लोड करें
  useEffect(() => {
    fetch("https://example.com/api/users") // ✅ Replace with actual API endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2 className="text-center" style={{backgroundColor:'orange',padding:'7px 0px'}}>Registered Users</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr style={{color:'orange'}}>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>City</th>
            <th>Role</th>
            <th>Status</th>
            <th>Block</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id || index}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.pincode}</td>
                <td>{user.city}</td>
                <td>{user.role || "User"}</td> {/* Default Role: User */}
                <td>{user.status || "Active"}</td> {/* Default Status: Active */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
