import React from 'react';
import { Col, Row, Card, Form, Button } from "react-bootstrap";

function Register() {
  return (
    <Row className="justify-content-center m-2 mt-5">
      <Col xs={12} sm={8} md={6} lg={4}>
        <Card className="shadow bg-secondary text-light">
          <Card.Body>
            <h2 className='text-center'>REGISTER</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" />
                <Form.Text className="text-muted">
                  Please upload your profile picture.
                </Form.Text>
              </Form.Group>
              <Button variant="outline-light" className="w-100 rounded-pill">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;
