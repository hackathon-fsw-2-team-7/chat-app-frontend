import DeleteUserComponent from "../../components/DeleteUser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoginPage = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          <DeleteUserComponent />
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
