import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Redirect,
} from "react-router-dom";


const TrainerUpdateDetails = () => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfClients, setType] = useState("");
  const [trainerType, setCategory] = useState("");
  //const [message, setMessage]=useState("");
  //const [token, setToken]=useState("");
  const [status, setStatus]=useState(false);

  const headStyle = {
    textAlign: "center",
    fontSize: 40,
  };
  const subheadStyle = {
    textAlign: "center",
    fontSize: 30,
  };

  const buttonStyle = {
    color: "white",
    textDecoration: "none",
  };

  const Submit = async (event) => {
    event.preventDefault();
   
     await axios
      .put("/api/v1/trainer/auth/register", {
        firstName,
        lastName,
        email,
        numberOfClients,
        trainerType,
      })
      .then((res) => {
        console.log(res.data.success);
        //setToken(res.data.token);
        setStatus(res.data.success);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        console.log(err.response.data.success);
        setStatus(err.response.data.success);
        //setMessage(err.response.data.error);
      });
   
  
    setFirst("");
    setLast("");
    setCategory("");
    setEmail("");
    setType("");
    
  };
  const First = (e) => {
    setFirst(e.target.value);
  };
  const Last = (e) => {
    setLast(e.target.value);
  };
  const Email = (e) => {
    setEmail(e.target.value);
  };
  const Type = (e) => {
    setType(e.target.value);
  };
  const Category = (e) => {
    setCategory(e.target.value);
  };

  if(status)
  return <Redirect to="/trainer/auth/dashboard"></Redirect>

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
              <Form.Text style={subheadStyle}>Signup and get started</Form.Text>
            </Col>
          </Form.Row>

          <br />

          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control onChange={First} required value={firstName} />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Col>

            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control onChange={Last} required value={lastName} />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
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
                value={email}
                required
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Col>
          </Form.Row>
          <br />
          
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Number of clients</Form.Label>

              <Form.Control
                as="select"
                onChange={Type}
                required
                value={numberOfClients}
              >
                <option></option>
                <option>1-1 clients</option>
                <option>1-2 clients</option>
                <option>1-3 clients</option>
                <option>1-4 clients</option>
                <option>1-5 clients</option>
              </Form.Control>
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>Trainer Category</Form.Label>

              <Form.Control
                as="select"
                onChange={Category}
                required
                value={trainerType}
              >
                <option></option>
                <option>HIIT</option>
                <option>a</option>
                <option>b</option>
                <option>c</option>
                <option>d</option>
              </Form.Control>
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
               <Link to="/trainer/auth/dashboard" style={{textDecoration:"none"}}> 
                <Button
                  variant="primary"
                  type="submit"
                  block
                  size="md"
                  onClick={Submit}
                >
                  Create your profile
                </Button>
              </Link>

              {/* <Button variant="primary" type="submit" block size="md">
                Create your account
              </Button> */}
            </Col>
          </Form.Row>
          <br />
          <Form.Text style={{ textAlign: "center", fontSize: 14 }}>
            Already registered <Link to="/trainer/auth/login">Sign in?</Link>
          </Form.Text>
        </Form>
      </div>
    </Container>
  );
};

export default TrainerUpdateDetails;
