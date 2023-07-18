import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  return (
    //// got this from my porfolio layout
    <div>
      {["md"].map((expand) => (
        <Navbar
          style={{ backgroundColor: "#e05e13" }}
          key={expand}
          bg="purple"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: "#c73e09" }}>
                <Nav
                  style={{ color: "white" }}
                  className="justify-content-end flex-grow-1 pe-2 nav nav-underline"
                >
                  <Nav.Link
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    href="/"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    href="/events"
                  >
                    Events
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    href="/login"
                  >
                    Login
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavBar;
