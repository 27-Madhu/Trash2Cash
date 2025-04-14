import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderManagement = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/scrap-orders");
                setOrders(res.data);
            } catch (err) {
                console.error("Error fetching orders:", err);
            }
        };

        fetchOrders();
    }, []);

    const getBadgeClass = (status) => {
        const badgeMap = {
            Completed: "bg-success",
            Pending: "bg-warning",
            Cancelled: "bg-danger",
            "Picked Up": "bg-primary",
            Scheduled: "bg-info",
            "Not Scheduled": "bg-secondary",
            Paid: "bg-success",
        };
        return badgeMap[status] || "bg-secondary";
    };

    // Function to format createdAt into a more readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // Format as per your locale
    };
  
    // Function to handle delete action
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
          try {
            const res = await fetch(`http://localhost:3001/api/admin/delete-order/${id}`, {
              method: 'DELETE',
            });
            const data = await res.json();
            if (res.ok) {
             
              setOrders(orders.filter(order => order._id !== id));
            } else {
              alert(data.message);
            }
          } catch (err) {
            console.error('Delete error:', err);
            alert('Failed to delete');
          }
        }
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
        Order Managment
      </h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Order ID</th>
                        <th>Item Name</th>
                        <th>Categories & Quantities</th>
                        <th>User Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Landmark</th>
                        <th>Order Status</th>
                        <th>Pickup Status</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Order Date</th> {/* Added Order Date Column */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order._id || index}>
                            <td>#{order._id.slice(-6).toUpperCase()}</td>
                            <td>{order.itemName}</td>
                            <td>
                                {order.categories?.map((cat, i) => (
                                    <div key={i}>
                                        <strong>{cat.name}</strong>
                                        <ul className="mb-1">
                                            {cat.subcategories?.map((sub, j) => (
                                                <li key={j}>
                                                    {sub.name} - {sub.quantity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </td>
                            <td>{order.pickupDetails?.name}</td>
                            <td>{order.pickupDetails?.contact}</td>
                            <td>{order.pickupDetails?.address}</td>
                            <td>{order.pickupDetails?.city}</td>
                            <td>{order.pickupDetails?.pincode}</td>
                            <td>{order.pickupDetails?.landmark}</td>
                            <td>
                                <span className={`badge ${getBadgeClass(order.status || "Pending")}`}>
                                    {order.status || "Pending"}
                                </span>
                            </td>
                            <td>
                                <span className={`badge ${getBadgeClass(order.pickupStatus || "Scheduled")}`}>
                                    {order.pickupStatus || "Scheduled"}
                                </span>
                            </td>
                            <td>{order.paymentMethod || "UPI"}</td>
                            <td>
                                <span className={`badge ${getBadgeClass(order.paymentStatus || "Pending")}`}>
                                    {order.paymentStatus || "Pending"}
                                </span>
                            </td>
                            <td>{formatDate(order.createdAt)}</td> {/* Displaying formatted date */}
                            <td>
                                {order.paymentStatus === "Pending" && (
                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => navigate(`/adminapp/make-payment/${order._id}`)}
                                    >
                                        ✅ Pay Now
                                    </button>
                                )}
                                
                                <button onClick={() => handleDelete(order._id)}>Delete</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManagement;
