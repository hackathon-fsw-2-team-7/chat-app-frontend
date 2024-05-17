import ProfileComponent from "../../components/Profile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const LoginPage = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={6} className="offset-md-3">
            <ProfileComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
