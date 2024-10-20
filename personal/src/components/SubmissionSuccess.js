import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SubmissionSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { name, email, message } = state.formData;

  const handleBackHome = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <div className="text-center">
      <h2>Thank you, {name}!</h2>
      <p>Your message has been sent.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
      <button onClick={handleBackHome} className="btn btn-primary">
        Back to Home
      </button>
    </div>
  );
};

export default SubmissionSuccess;
