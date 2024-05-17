import {Container, Image, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import AppRoutes from "../utils/appRoutes.js";
import reactLogo from "/public/assets/react.svg";
import {logout} from "../redux/actions/auth.js";
import {useDispatch} from "react-redux";

export default function AppNavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const expand = "lg";

    return (
        <>
            <Navbar key={expand} expand={expand} className="bg-body-secondary mb-3">
                <Container>
                    <Navbar.Brand as={Link} to={AppRoutes.HOME}>
                        <Image className={"me-3"} src={reactLogo} alt={"Vite Logo"}/>
                        Chat App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Image src={reactLogo} alt={"Vite Logo"} className={"me-3"}/>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Chat App
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 me-3">
                                <>
                                    <Nav.Link as={Link} to={AppRoutes.HOME}>Home</Nav.Link>
                                    <Nav.Link as={Link} onClick={() => {

                                    }}>My Profile</Nav.Link>
                                    <Nav.Link as={Link} onClick={() => {
                                        dispatch(logout());
                                        navigate("/login");
                                    }}>Logout</Nav.Link>
                                </>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}