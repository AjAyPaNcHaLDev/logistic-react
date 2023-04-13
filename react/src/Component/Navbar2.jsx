import { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
function Navbar2() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="navbar-nav m-auto py-0">
              <NavLink
                to="/"
                activeClassName="active"
                className={`nav-item nav-link `}
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                activeClassName="active"
                className={`nav-item nav-link `}
              >
                About
              </NavLink>
              <NavLink
                to="service"
                activeClassName="active"
                className={`nav-item nav-link `}
              >
                Service
              </NavLink>
              <NavLink
                to="price"
                activeClassName="active"
                className={`nav-item nav-link `}
              >
                Price
              </NavLink>
              <NavDropdown
                className="nav-item dropdown"
                title="Dropdown"
                activeClassName="active"
                id="basic-nav-dropdown"
              >
                <NavLink
                  to="blog"
                  activeClassName="active"
                  className="dropdown-item"
                >
                  Blog Grid
                </NavLink>{" "}
                <NavLink
                  to="single"
                  activeClassName="active"
                  className="dropdown-item"
                >
                  Blog Detail
                </NavLink>
              </NavDropdown>
              <NavLink
                to="contact"
                activeClassName="active"
                className={`nav-item nav-link `}
              >
                Contact
              </NavLink>
            </div>
            <NavLink
              to="quote"
              className="btn btn-primary py-2 px-4 d-none d-lg-block"
            >
              Get A Quote
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2;
