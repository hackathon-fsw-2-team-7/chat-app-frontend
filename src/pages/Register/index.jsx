import React from "react";
import RegisterComponent from "../../components/Register";
import { Col, Row, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <RegisterComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="offset-md-3">
          <p className="text-center">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Register;
