import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Route,
  IndexRoute,
} from "react-router-dom";

const ClientUpdatePaaswoord = () => {
  const buttonStyle = {
    color: "white",
    textDecoration: "none",
  };
  const headStyle = {
    textAlign: "center",
    fontSize: 40,
  };
  const subheadStyle = {
    textAlign: "center",
    fontSize: 30,
  };

  return (
    <Container fluid>
      <div className="Signup">
        <br />
        <Form className="Fields">
          <Form.Row>
            <Col>
              <Form.Text style={headStyle}>TREAD</Form.Text>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Text style={subheadStyle}>
                Client Reset Your Password
              </Form.Text>
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Link to="/client/auth/login" style={buttonStyle}>
                <Button variant="primary" type="submit" block size="md">
                  Set
                </Button>
              </Link>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Container>
  );
};

export default ClientUpdatePaaswoord;
