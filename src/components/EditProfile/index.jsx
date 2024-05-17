import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";

const Profile = () => {
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
            <Button variant="outline-dark" className="cancel">
              X
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Form>
            <InputGroup className="mb-3 mt-5">
              <InputGroup.Text id="nama-addon" className="custom-label">
                Username
              </InputGroup.Text>
              <Form.Control
                aria-label="nama"
                aria-describedby="nama-addon"
                placeholder="linusTechTips" // currrent username
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="nama-addon" className="custom-label">
                Name
              </InputGroup.Text>
              <Form.Control
                aria-label="nama"
                aria-describedby="nama-addon"
                placeholder="Linus Sebastian" // current name
              />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Text id="mail-addon" className="custom-label">
                Email
              </InputGroup.Text>
              <Form.Control
                aria-label="mail"
                aria-describedby="mail-addon"
                placeholder="linussebaastian@binar.com" // current email
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Form.Label className="ms-1">Change Profile Picture</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
          </Form>

          <div className="d-grid gap-2 mt-5">
            <Button variant="success" className="w-100 rounded-pill">
              Save Changes
            </Button>
            <Button variant="warning" className="w-100 rounded-pill">
              Cancel
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
