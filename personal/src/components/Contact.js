import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/submission-success', { state: { formData } }); // Use state instead of passing data directly
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="form-group">
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          className="form-control" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          className="form-control" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea 
          name="message" 
          className="form-control" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Contact;
