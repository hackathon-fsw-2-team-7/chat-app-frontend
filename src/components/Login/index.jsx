import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

import GoogleLogin from "../LoginGoogle";

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    // login action (fetch api)
    dispatch(login(navigate, email, password, setIsLoading));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button
        className="w-100 rounded-pill"
        variant="primary"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Login"}
      </Button>
      <Form.Group className="my-3 text-center">
        <h5>Or</h5>
      </Form.Group>
      <GoogleLogin text={"Login with Google"} />
    </Form>
  );
};

export default LoginComponent;
