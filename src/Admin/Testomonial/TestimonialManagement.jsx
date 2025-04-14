import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TestimonialManagement = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: "John Doe", message: "Great service!", image: "https://via.placeholder.com/50" },
    { id: 2, name: "Jane Smith", message: "Amazing experience!", image: "https://via.placeholder.com/50" },
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message || !image) return;

    if (editingId) {
      setTestimonials(testimonials.map((t) => (t.id === editingId ? { id: editingId, name, message, image } : t)));
      setEditingId(null);
    } else {
      const newTestimonial = {
        id: Date.now(),
        name,
        message,
        image,
      };
      setTestimonials([...testimonials, newTestimonial]);
    }

    setName("");
    setMessage("");
    setImage("");
  };

  const handleEdit = (testimonial) => {
    setName(testimonial.name);
    setMessage(testimonial.message);
    setImage(testimonial.image);
    setEditingId(testimonial.id);
  };

  const handleDelete = (id) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
  };

  return (
    <div className="container mt-4" style={{ marginLeft: "250px" }}>
      <h2 className="text-center">Testimonial Management</h2>

      {/* Add/Edit Testimonial Form */}
      <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow-sm bg-light">
        <h4>{editingId ? "Edit Testimonial" : "Add Testimonial"}</h4>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingId ? "Update Testimonial" : "Add Testimonial"}
        </button>
      </form>

      {/* Testimonial List */}
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial) => (
            <tr key={testimonial.id}>
              <td>
                <img src={testimonial.image} alt="testimonial" className="rounded-circle" width="50" height="50" />
              </td>
              <td>{testimonial.name}</td>
              <td>{testimonial.message}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(testimonial)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(testimonial.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestimonialManagement;