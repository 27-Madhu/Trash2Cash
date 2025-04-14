import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ScrapRatesManagement() {
  const categories = {
    Plastic: ["Plastic Bottle", "Mix Plastic", "High-density Pool"],
    Metal: ["Aluminum", "Copper", "Steel"],
    Glass: ["Beer Bottle Glass", "Colored Glass", "Mixed Glass"],
    Paper: ["Newspaper", "Office Paper", "Mixed Paper"],
  };

  const [rates, setRates] = useState(() => {
    const savedRates = localStorage.getItem("scrapRates");
    return savedRates ? JSON.parse(savedRates) : [];
  });

  const [newRate, setNewRate] = useState({ category: "", type: "", price: "" });

  useEffect(() => {
    localStorage.setItem("scrapRates", JSON.stringify(rates));
  }, [rates]);

  const handleAddOrUpdateRate = () => {
    if (!newRate.category || !newRate.type || !newRate.price) return;

    // Check if the category-type combination already exists
    const existingRateIndex = rates.findIndex(
      (rate) => rate.category === newRate.category && rate.type === newRate.type
    );

    if (existingRateIndex !== -1) {
      // Update the existing rate
      const updatedRates = [...rates];
      updatedRates[existingRateIndex].price = parseFloat(newRate.price);
      setRates(updatedRates);
    } else {
      // Add new rate
      const newId = rates.length ? Math.max(...rates.map((r) => r.id)) + 1 : 1;
      setRates([...rates, { id: newId, ...newRate, price: parseFloat(newRate.price) }]);
    }

    setNewRate({ category: "", type: "", price: "" });
  };

  return (
    <div className="container mt-4" style={{ marginLeft: "250px" }}>
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
        Scrap Rates Management
      </h2>

      {/* Add New Rate Form */}
      <div className="card p-4 mb-4 shadow-sm">
        <h4 className="text-secondary">Add / Update Scrap Rate</h4>
        <div className="row g-3">
          <div className="col-md-3">
            <select
              className="form-control"
              value={newRate.category}
              onChange={(e) => setNewRate({ ...newRate, category: e.target.value, type: "" })}
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <select
              className="form-control"
              value={newRate.type}
              onChange={(e) => setNewRate({ ...newRate, type: e.target.value })}
              disabled={!newRate.category}
            >
              <option value="">Select Type</option>
              {newRate.category && categories[newRate.category].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={newRate.price}
              onChange={(e) => setNewRate({ ...newRate, price: e.target.value })}
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary w-100" onClick={handleAddOrUpdateRate}>
              Add / Update Rate
            </button>
          </div>
        </div>
      </div>

      {/* Scrap Rates Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Type</th>
              <th>Price (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate) => (
              <tr key={rate.id} className="text-center">
                <td>{rate.id}</td>
                <td>{rate.category}</td>
                <td>{rate.type}</td>
                <td>₹{rate.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => setRates(rates.filter((r) => r.id !== rate.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {rates.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">No scrap rates available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

