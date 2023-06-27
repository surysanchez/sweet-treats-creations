import React from "react";
import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Container } from "react-bootstrap";

export default function SignUpForm({ setUser }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setState({
      [evt.target.name]: evt.target.value,
      setError: "",
    });
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const { name, email, password } = state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await usersService.signUp(formData);
      console.log(user);
      setUser(user);
      navigate("/");
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      setState({ error: "Sign Up Failed - Try Again" });
    }
  }
  return (
    <>
      <Container fluid>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          {/* <Form.Label column sm="2">
            Name
          </Form.Label> */}
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              aria-describedby="basic-addon1"
              required
              value={state.name}
              onChange={handleChange}
              as="textarea"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              aria-describedby="basic-addon2"
              required
              value={state.email}
              onChange={handleChange}
              as="textarea"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>

          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Control
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Control
              name="confirm"
              value={state.confirm}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <Button type="submit">SIGN UP</Button>
        </Form>
        <p className="error-message">&nbsp;{state.error}</p>
      </Container>
    </>
  );
}
