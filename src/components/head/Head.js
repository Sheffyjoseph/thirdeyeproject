import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import './Head.css'
import {  BsFillCartFill} from "react-icons/bs";

function Head() {
  return (
    <div className="main">
      <Navbar  className="nav">
        <Container >
         <img src="download.jpg" alt="" height={50} width={200}/>
          <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search for products,brands and more"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
                <NavDropdown title="Anoop" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Don</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Boss
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  sheffy
                </NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href="#action1" id="name" className="me-2">Become a seller</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown" className="me-2">
              </NavDropdown>
            </Nav>
            <div className="icons">
            <BsFillCartFill/>cart
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Head;
