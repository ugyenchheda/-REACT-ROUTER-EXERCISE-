import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const Home = ({ isHome }) => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const checkemailformat = () => {
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || !email.trim()) {
      setError('Please enter a valid email address.');
      return;
    }
  
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    // Implement your subscribe logic here
    setShowSuccess(true);
    // Reset email field
    setEmail('');
  };
  

  return (
    <>
      {isHome && (
        <Card className="my-4">
          <Card.Body>
            <Card.Title className="h4 mb-4">Welcome !</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">Home Page</Card.Subtitle>
            <Card.Text className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
</Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  isInvalid={error !== ''}
                />
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
              </Form.Group>
              <Button variant="btn btn-secondary active" onClick={checkemailformat}>
                Subscribe
              </Button>
            </Form>
            {showSuccess && (
              <Alert variant="success" className="mt-3">
                Thank you for subscribing!
              </Alert>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Home;
