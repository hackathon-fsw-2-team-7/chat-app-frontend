import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/register";
import GoogleLoginComponent from "../GoogleLogin";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // dispatch the register action
        dispatch(
            register(navigate, username, email, password, name, photo, setIsLoading)
        );
    };

return (
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                <Form.Text className="text-muted">
                  Please upload your profile picture.
                </Form.Text>
              </Form.Group>
              <Button variant="outline-light" className="w-100 rounded-pill" type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Register"}
              </Button>
              <h6 className="text-center" my={1}>Or</h6>
              <GoogleLoginComponent/>
            </Form>
  );
}

export default Register;