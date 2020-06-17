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

const ClientForgetPaaswoord = () => {
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
              <Form.Text style={subheadStyle}>Reset Your Password</Form.Text>
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Col>
          </Form.Row>
          <br />
          <br />
          <Form.Row>
            <Col>
              <Link to="/client/auth/login" style={buttonStyle}>
                <Button variant="primary" type="submit" block size="md">
                  Send mail for reset
                </Button>
              </Link>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Container>
  );
};

export default ClientForgetPaaswoord;
