import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const { state } = useLocation();
  const { name, email, message } = state.formData;

  return (
    <div className="text-center">
      <h2>Thank you, {name}!</h2>
      <p>Your message has been sent.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
};

export default SubmissionSuccess;
