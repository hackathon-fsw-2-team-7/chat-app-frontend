import { Container, Nav, Navbar } from "react-bootstrap";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile, logout } from "../../redux/actions/auth";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getProfile(navigate, null, "/login"));
  }, [navigate, dispatch, token]);

  return (
    <>
      <style type="text/css">
        {`
          .bg-bluish {
            background-color: #F1F3FF;
          }
        `}
      </style>

      <Navbar expand="lg" className="bg-bluish">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="images/logo.png"
              width="40"
              className="d-inline-block align-top"
              alt="ChatApp logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="ms-3">
                Home
              </Nav.Link>

              {user ? (
                <>
                  <Nav.Link as={Link} to="/profile" className="ms-3">
                    Profile ({user?.name})
                  </Nav.Link>

                  <Nav.Link
                    className="ms-3 text-danger"
                    onClick={() => dispatch(logout(navigate))}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="ms-3">
                    Login
                  </Nav.Link>

                  <Nav.Link as={Link} to="/register" className="ms-3">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
