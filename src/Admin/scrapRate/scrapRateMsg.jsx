import React, { useState } from "react";

export default function ScrapRatesManagement() {
  // स्टेट में प्रारंभिक Scrap Rates डेटा
  const [rates, setRates] = useState([
    { id: 1, material: "Aluminum", price: 100 },
    { id: 2, material: "Copper", price: 200 },
  ]);

  // नया Rate जोड़ने के लिए स्टेट
  const [newRate, setNewRate] = useState({ material: "", price: "" });
  
  // Edit मोड के लिए स्टेट
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ material: "", price: "" });

  // नया Rate जोड़ने का फ़ंक्शन
  const handleAddRate = () => {
    if (!newRate.material || !newRate.price) return;
    const newId = rates.length ? Math.max(...rates.map((r) => r.id)) + 1 : 1;
    setRates([...rates, { id: newId, material: newRate.material, price: parseFloat(newRate.price) }]);
    setNewRate({ material: "", price: "" });
  };

  // Delete Rate का फ़ंक्शन
  const handleDeleteRate = (id) => {
    setRates(rates.filter((rate) => rate.id !== id));
  };

  // Edit मोड में जाने का फ़ंक्शन
  const handleEditRate = (rate) => {
    setEditingId(rate.id);
    setEditingData({ material: rate.material, price: rate.price });
  };

  // Update Rate का फ़ंक्शन
  const handleUpdateRate = () => {
    setRates(
      rates.map((rate) =>
        rate.id === editingId
          ? { ...rate, material: editingData.material, price: parseFloat(editingData.price) }
          : rate
      )
    );
    setEditingId(null);
    setEditingData({ material: "", price: "" });
  };

  return (
    <div>
      <h2>Scrap Rates Management</h2>
      
      {/* Add New Rate Form */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Add New Scrap Rate</h3>
        <input
          type="text"
          placeholder="Material"
          value={newRate.material}
          onChange={(e) => setNewRate({ ...newRate, material: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newRate.price}
          onChange={(e) => setNewRate({ ...newRate, price: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddRate}>Add Rate</button>
      </div>

      {/* Scrap Rates Table */}
      <h3>Existing Scrap Rates</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Material</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.id}>
              <td>{rate.id}</td>
              <td>
                {editingId === rate.id ? (
                  <input
                    type="text"
                    value={editingData.material}
                    onChange={(e) => setEditingData({ ...editingData, material: e.target.value })}
                  />
                ) : (
                  rate.material
                )}
              </td>
              <td>
                {editingId === rate.id ? (
                  <input
                    type="number"
                    value={editingData.price}
                    onChange={(e) => setEditingData({ ...editingData, price: e.target.value })}
                  />
                ) : (
                  rate.price
                )}
              </td>
              <td>
                {editingId === rate.id ? (
                  <>
                    <button onClick={handleUpdateRate} style={{ marginRight: "5px" }}>
                      Update
                    </button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditRate(rate)} style={{ marginRight: "5px" }}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteRate(rate.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {rates.length === 0 && (
            <tr>
              <td colSpan="4">No scrap rates available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
