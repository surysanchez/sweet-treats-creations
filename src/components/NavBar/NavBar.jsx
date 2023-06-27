import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Image from "react-bootstrap/Image";
import AuthPage from "../../pages/AuthPage/AuthPage";
import LoginForm from "../LoginForm/LoginForm";
// import {MDBIcon } from 'mdb-react-ui-kit';
import { MDBIcon } from "mdbreact";
import { useState } from "react";

export default function NavBar({ user, setUser }) {
  const [showCreate, setShowCreate] = useState(true);
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* {!user ? (
              <Nav.Link href="/authpage">Sign Up/ Login In </Nav.Link>
            ) : ( */}
            <>
              <Nav.Link href="/createOwn">Create your Own</Nav.Link>
              <Nav.Link href="/treats">My Treats</Nav.Link>
            </>
            {/* // )} */}
            <br />
            <Navbar.Brand>
              <Nav.Link href="/">
                <Image className="logo" src="https://i.imgur.com/aRxhj07.jpg" />
              </Nav.Link>
            </Navbar.Brand>
            <br />
            <Nav.Link href="/customtreat">Cakes Gallery</Nav.Link>
            <Nav.Link href="/ordertreats">Treats Gallery</Nav.Link>

            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
            {/* <Nav className="me-auto"> */}
            {/* <NavDropdown title="Account" id="basic-nav-dropdown"> */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/orders">Order History</NavDropdown.Item>
            <NavDropdown.Item href="/orders/new">
              New Order
              </NavDropdown.Item> */}

              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/contact">Contact us</Nav.Link>

              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              {/* {user ? (
                <Button Link to="" onClick={handleLogOut}>
                  LOG OUT
                </Button>
              ) : (
                <Nav.Link href="/authpage">Sign Up/ Login In </Nav.Link>
              )} */}
              <NavDropdown.Divider />
              <Nav.Link href="/order">
                <MDBIcon fas icon="cart-plus" />{" "}
              </Nav.Link>
            </NavDropdown>

            {/* </Nav>
        {/* </Navbar.Collapse> */}
            {/* <Nav.Link href='/order'>Cart </Nav.Link>  */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
