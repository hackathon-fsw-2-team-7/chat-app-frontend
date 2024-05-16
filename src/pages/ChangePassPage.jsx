import { Col, Row } from "react-bootstrap";
import ChangePassComponent from "../components/ChangePass";

const Profile = () => {
    return (
        <Row className="justify-content-center m-2 mt-5">
            <Col xs={12} sm={8} md={6} lg={4}>
                <ChangePassComponent />
            </Col>
        </Row>
    );
};

export default Profile;
