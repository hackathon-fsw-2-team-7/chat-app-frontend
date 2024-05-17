import { Card, Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/auth";

const DeleteUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [confirmationText, setConfirmationText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteUser(navigate, setIsLoading));
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
            <span className="fs-5">Delete Account</span>
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
            <Form.Group className="mb-3" controlId="confirmation">
              <Form.Label>Confirmation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type 'Confirm, delete my account'"
                value={confirmationText}
                onChange={(e) => setConfirmationText(e.target.value)}
              />
              <Form.Text className="text-muted">
                You need to type 'Confirm, delete my account' to proceed.
              </Form.Text>
            </Form.Group>

            <div className="d-grid gap-2 mt-5">
              <Button
                variant="danger"
                className="w-100 rounded-pill"
                type="submit"
                disabled={
                  isLoading || confirmationText !== "Confirm, delete my account"
                }
              >
                {isLoading ? "Processing..." : "Delete Account"}
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

export default DeleteUser;
