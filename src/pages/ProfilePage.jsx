import { Col, Row } from "react-bootstrap";
import ProfileComponent from "../components/Profile";

const Profile = () => {
    return (
        <Row className="justify-content-center m-2 mt-5">
            <Col xs={12} sm={8} md={6} lg={4}>
                <ProfileComponent />
            </Col>
        </Row>
    );
};

export default Profile;
