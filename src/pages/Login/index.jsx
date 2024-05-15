import LoginComponent from "../../components/Login";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <LoginComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="offset-md-3">
          <p className="text-center">
            Don't have an account yet? <Link to="/register">Register</Link>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
