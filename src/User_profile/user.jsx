import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import img from "../all_image/user.jpg"; // User avatar image
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchSales = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/my-orders", {
          headers: {
            Authorization: `Bearer ${user.token}`, // 👈 Send token
          },
        });
        setSales(res.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
        setError("Failed to fetch sales data. Please try again later.");
      } finally {
        setLoading(false); // Stop loading once the request finishes
      }
    };

    fetchSales();
  }, [user, navigate]);

  return (
    <div className="container mb-5" style={{ marginTop: "120px" }}>
      <div className="card p-4 shadow-sm">
        <div className="d-flex">
          <div className="me-4 text-center">
            <img
              src={img}
              alt="User Avatar"
              className="rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4 className="mb-2">Welcome</h4>
            <p><strong>Email:</strong> {user?.email}</p>
            <button
              className="btn btn-danger mt-2"
              onClick={() => navigate("/login")}
            >
              Logout
            </button>
          </div>

          <div className="flex-grow-1">
            <h4 className="mt-3">📦 Your Scrap Sale History</h4>
            
            {loading ? (
              <p>Loading your sales history...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : sales.length > 0 ? (
              <table className="table table-striped mt-3">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Categories</th>
                    <th>Subcategories & Quantity</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((item, index) => (
                    <tr key={index}>
                      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                      <td>{item.itemName}</td>
                      <td>
                        {item.categories.map((cat, i) => (
                          <div key={i}>{cat.name}</div>
                        ))}
                      </td>
                      <td>
                        {item.categories.map((cat, i) =>
                          cat.subcategories.map((sub, j) => (
                            <div key={j}>
                              {sub.name} - {sub.quantity} kg
                            </div>
                          ))
                        )}
                      </td>
                      <td>
                        {item.itemImage ? (
                          <img
                            src={`http://localhost:3001/uploads/${item.itemImage}`}
                            alt="Scrap"
                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No scrap sales found yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
