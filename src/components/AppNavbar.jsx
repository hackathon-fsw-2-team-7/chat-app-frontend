import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import AppRoutes from "../utils/appRoutes.js";
import {Offcanvas} from "react-bootstrap";
import {Image} from "react-bootstrap";
import reactLogo from "/public/assets/react.svg";

export default function AppNavbar() {
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
                                    <Nav.Link as={Link} to={"#"}>My Profile</Nav.Link>
                                </>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}