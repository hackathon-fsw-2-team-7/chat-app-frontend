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
            <span className="fs-5">Profile</span>
            <Button variant="outline-dark" className="cancel">
              X
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Form>
            <div className="d-flex flex-column align-items-center mb-4">
              {/* Check if photo exists, if not use default photo */}
              <Image
                src="images/profileTemp.jpg"
                className="img-profile"
                roundedCircle
              />
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="nama-addon" className="custom-label">
                Username
              </InputGroup.Text>
              <Form.Control
                aria-label="nama"
                aria-describedby="nama-addon"
                value="linusTechTips" // replace with real data
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
                value="Linus Sebastian" // replace with real data
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
                value="linussebaastian@binar.com" // replace with real data
                disabled
              />
            </InputGroup>
          </Form>

          <div className="d-grid gap-2 mt-5">
            <Button variant="primary" className="w-100 rounded-pill">
              Edit Profile
            </Button>
            <Button variant="danger" className="w-100 rounded-pill">
              Delete Profile
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
