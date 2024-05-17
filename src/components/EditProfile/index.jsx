import { Card, Form, InputGroup, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../../redux/actions/auth";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(username, name, email, photo);
    dispatch(editProfile(navigate, username, email, name, photo, setIsLoading));
  };

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
            <span className="fs-5">Edit Profile</span>
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
          <Form onSubmit={onSubmit}>
            <InputGroup className="mb-3 mt-5">
              <InputGroup.Text id="nama-addon" className="custom-label">
                Username
              </InputGroup.Text>
              <Form.Control
                aria-label="nama"
                aria-describedby="nama-addon"
                placeholder="New Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="nama-addon" className="custom-label">
                Name
              </InputGroup.Text>
              <Form.Control
                aria-label="nama"
                aria-describedby="nama-addon"
                placeholder="New Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Text id="mail-addon" className="custom-label">
                Email
              </InputGroup.Text>
              <Form.Control
                type="email" // Add this line
                aria-label="mail"
                aria-describedby="mail-addon"
                placeholder="New Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Form.Label className="ms-1">Change Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-5">
              <Button
                variant="success"
                className="w-100 rounded-pill"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Save Changes"}
              </Button>
              <Button
                variant="warning"
                className="w-100 rounded-pill"
                disabled={isLoading}
                onClick={() => navigate("/profile")}
              >
                {isLoading ? "Processing..." : "Cancel"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default EditProfile;
