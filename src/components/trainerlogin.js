import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
  IndexRoute,
  withRouter
} from "react-router-dom";


const TrainerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken]=useState("");
  const [status, setStatus]=useState(false);

  const headStyle = {
    textAlign: "center",
    fontSize: 40,
  };
  const subheadStyle = {
    textAlign: "center",
    fontSize: 30,
  };

  const Submit = async (event) => {
    event.preventDefault();

    await axios.post("/api/v1/trainer/auth/login", { email,password })
    .then((res) => {
      setToken(res.data.token);
      setStatus(res.data.success);
      
    
      
      // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    }).catch((err)=>{
      console.log(err.response.data.error);
      setStatus(err.response.data.success);
      setMessage(err.response.data.error);
      
    });
    
    setEmail("");
    setPassword("");
  };

  const Email = (e) => {
    setEmail(e.target.value);
  };
  const Password = (e) => {
    setPassword(e.target.value);
  };

  if(status)
  return <Redirect to="/trainer/auth/dashboard"></Redirect>

  return (
    <Container fluid>
      <div className="Signup">
        <br />
        <Form className="Fields"  >
          <Form.Row>
            <Col>
              <Form.Text style={headStyle}>TREAD</Form.Text>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Text style={subheadStyle}>Trainer Login and get started</Form.Text>
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={Email}
                required
                value={email}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={Password}
                required
                value={password}
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <Link to="/trainer/auth/dashboard" style={{textDecoration:"none"}}>
                <Button variant="primary"  type="submit" block size="md" onClick={Submit}>
                  Login
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
            <Link to="/trainer/auth/register" style={{textDecoration:"none"}}>Register Now!</Link>{" "}
            <Link to="/trainer/auth/forgotpassword" style={{textDecoration:"none"}}>Forget Password?</Link>
            
          </Form.Text>
        </Form>
      </div>
    </Container>
  );
};

export default TrainerLogin;
