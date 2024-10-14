import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <Container>
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </Container>
  );
};

export default SubmissionSuccess;
