import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Link,
  BrowserRouter as Router,
  Route,
  IndexRoute,
} from "react-router-dom";
import {
  Container,
  Card,
  Image,
  Form,
  Col,
  Row,
  icon,
  Button,
  ButtonGroup,
  ToggleButton,
  InputGroup,
} from "react-bootstrap";

import Avatar from "react-avatar";

const ClientLogin = () => {
  const headStyle = {
    textAlign: "center",
    fontSize: 40,
  };
  const subheadStyle = {
    textAlign: "center",
    fontSize: 20,
  };
  const textbody = {
    fontSize: 15,
  };
  const avatar = {
    margin: 0,
    textAlign: "center",
  };

  return (
    <Container fluid>
      <br />
      <div className="Signin">
        <Form className="Fields">
          <Form.Row>
            <Col>
              <Form.Text style={headStyle}>TREAD</Form.Text>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Text style={subheadStyle}>
                Client Login and get started
              </Form.Text>
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <br />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Row>
          <br />

          <Form.Row>
            <Col>
              <Link to="/client/auth/dashboard" style={{textDecoration:"none"}}>
                <Button variant="primary" type="submit" block size="md" >
                  Login Client
                </Button>
              </Link>
            </Col>
          </Form.Row>
          <br />
          <Form.Text
            style={{
              textAlign: "center",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            <Link to="/client/auth/forgotpassword" style={{textDecoration:"none"}}>Forgot Password?</Link>
          </Form.Text>
        </Form>
      </div>
    </Container>
  );
};

export default ClientLogin;
