import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch Contacts from Backend
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log("Error fetching contacts:", err));
  }, []);

  //Delete data by adminside
  const handleDelete = (id) => {
    console.log("🛑 Trying to Delete Contact with ID:", id); // Debugging

    axios
      .delete(`http://localhost:3001/admin/contacts/${id}`)
      .then(() => {
        console.log("✅ Contact Deleted Successfully!");
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact._id !== id)
        );
      })
      .catch((err) =>
        console.log(
          "❌ Error deleting contact:",
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
        Contact Management
      </h2>
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.id || contact._id}</td>{" "}
                {/* ✅ Show 'id' if available, fallback to _id */}
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
                <td>{contact.message}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Contacts Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManagement;