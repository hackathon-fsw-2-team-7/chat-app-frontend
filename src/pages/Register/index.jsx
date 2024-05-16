import React from 'react';
import RegisterComponent from '../components/Register';
import { Col, Row, Card, } from "react-bootstrap";

const Register = () => {
  return (
    <Row className="justify-content-center m-2 mt-5">
      <Col xs={12} sm={8} md={6} lg={4}>
        <Card className="shadow bg-secondary text-light">
          <Card.Body>
            <h2 className='text-center'>REGISTER</h2>
              <RegisterComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;
