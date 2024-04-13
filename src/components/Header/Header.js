import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-primary " bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="" className="d-flex justify-center py-10 mr-auto">
          Form
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action4">
                Database
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Saved
              </NavDropdown.Item> */}
            {/* </NavDropdown>
          </Nav> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Header;
