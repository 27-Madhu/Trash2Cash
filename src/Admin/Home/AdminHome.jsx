import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios"; // Import axios for API calls

const AdminHome = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalScrapEntries: 3,  // Static data, can be updated later from API
    activeOrders: 12,      // Static data, can be updated later from API
    totalPayments: "₹50,000",  // Static data, can be updated later from API
    totalScrapCollected: "1500 KG",  // Static data, can be updated later from API
    totalFeedbacks: 45,  // Static data, can be updated later from API
  });

  // Fetch dashboard data from the backend API
  const fetchDashboardData = async () => {
    try {
      const userCountResponse = await axios.get("http://localhost:3001/api/total-users");
      const userCount = userCountResponse.data.totalUsers;

      // Here, you can add other API calls to fetch more data (e.g., totalScrapEntries, activeOrders, etc.)
      setDashboardData(prevState => ({
        ...prevState,
        totalUsers: userCount,
        // You can update other fields here by calling other APIs as needed
      }));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  // Use useEffect to call the fetch function when the component mounts
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="container mt-4 " style={{ marginLeft: "250px" }}>
      <h2 className="text-center bg-warning py-3">Welcome to Admin Dashboard</h2>

      {/* Dashboard Cards Section */}
      <div className="row g-4 mt-3">
        {/* Total Registered Users */}
        <div className="col-md-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-warning"><strong>Total Registered Users</strong></Card.Title>
              <Card.Text>{dashboardData.totalUsers} Users</Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Total Scrap Rate Entries */}
        <div className="col-md-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-warning"><strong>Total Scrap Rate Entries</strong></Card.Title>
              <Card.Text>{dashboardData.totalScrapEntries} Entries</Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Active Orders / Transactions */}
        <div className="col-md-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-warning"><strong>Active Orders / Transactions</strong></Card.Title>
              <Card.Text>{dashboardData.activeOrders} Active Orders</Card.Text>
            </Card.Body>
          </Card>
        </div>

     

        {/* Total Scrap Collected */}
        <div className="col-md-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-warning"><strong>Total Scrap Collected</strong></Card.Title>
              <Card.Text>{dashboardData.totalScrapCollected}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Total Feedback Received */}
        <div className="col-md-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-warning"><strong>Total Feedback Received</strong></Card.Title>
              <Card.Text>{dashboardData.totalFeedbacks} Feedbacks</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
