import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ContactDetails() {
  return (
    <div id="contact" className="container mt-4 p-4 bg-light rounded">
      <Card className="border-0">
        <Card.Body>
          <Card.Title className="border-bottom pb-2 text-center h2 text-dark">Contact Ugyen</Card.Title>
          <Card.Text className="text-center text-muted mb-4">
            For questions or feedback, please choose a category below.
          </Card.Text>
          <Card className="bg-light border-0 mb-3">
            <Card.Body>
              <Card.Title className="border-bottom pb-2 mb-4 h4 text-dark">General Inquiry</Card.Title>
              <Button className="btn btn-secondary" href="mailto:ugyen@example.com" >
                ugyen@example.com
              </Button>
            </Card.Body>
          </Card>
          <Card className="bg-light border-0 mb-3">
            <Card.Body>
              <Card.Title className="border-bottom pb-2 mb-4 h4 text-dark">Feedback</Card.Title>
              <Button className="btn btn-warning" href="mailto:ugyen.feedback@example.com" >
                ugyen.feedback@example.com
              </Button>
            </Card.Body>
          </Card>
          <Card className="bg-light border-0">
            <Card.Body>
              <Card.Title className="border-bottom pb-2 mb-4 h4 text-dark">Support</Card.Title>
              <Button  className="btn btn-info" href="mailto:ugyen.support@example.com" >
                ugyen.support@example.com
              </Button>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactDetails;
