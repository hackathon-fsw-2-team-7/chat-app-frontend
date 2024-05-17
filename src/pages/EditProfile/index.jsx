import EditProfileComponent from "../../components/EditProfile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoginPage = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          <EditProfileComponent />
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
