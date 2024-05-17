import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // get profile
    dispatch(getProfile(null, null, null));
  }, [dispatch]);

  return (
    <>
      <style type="text/css">
        {`
          .img-profile {
            object-fit: cover;
            height: 200px;
            width: 200px;
            border: 3px solid white;
          }
          .custom-label {
            width: 95px;
          }
          .cancel {
            width: 30px;
            height: 30px;
            padding: 0;
            text-align: center;
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        `}
      </style>

      <Card>
        <Card.Header>
          <div className="header-content">
            <span className="fs-5">Profile</span>
            <Button
              variant="outline-dark"
              className="cancel"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="d-flex flex-column align-items-center mb-4">
            {user?.photo && (
              <Image src={user?.photo} className="img-profile" roundedCircle />
            )}
          </div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="nama-addon" className="custom-label">
              Username
            </InputGroup.Text>
            <Form.Control
              aria-label="nama"
              aria-describedby="nama-addon"
              value={user?.username}
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="nama-addon" className="custom-label">
              Name
            </InputGroup.Text>
            <Form.Control
              aria-label="nama"
              aria-describedby="nama-addon"
              value={user?.name}
              disabled
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="mail-addon" className="custom-label">
              Email
            </InputGroup.Text>
            <Form.Control
              aria-label="mail"
              aria-describedby="mail-addon"
              value={user?.email}
              disabled
            />
          </InputGroup>

          <div className="d-grid gap-2 mt-5">
            <Button
              variant="primary"
              className="w-100 rounded-pill"
              onClick={() => navigate("/edit-profile")}
            >
              Edit Profile
            </Button>
            <Button
              variant="danger"
              className="w-100 rounded-pill"
              onClick={() => navigate("/delete-user")}
            >
              Delete Account
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
