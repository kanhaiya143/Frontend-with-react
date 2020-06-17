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

const TrainerForgetPaaswoord = () => {
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

  const [email, setEmail] = useState("");
  const [message, setMessage]=useState("");
  const [status, setStatus]=useState(false);

  const Submit = async (event) => {
    event.preventDefault();

    await axios.post("/api/v1/trainer/auth/forgotpassword", { email })
    .then((res) => {
      
      setStatus(res.data.success);
      setMessage(res.data.data)
      
      // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    }).catch((err)=>{
      setStatus(err.response.data.success);
      setMessage(err.response.data.error);

     
    });
    
    setEmail("");
    
  };

  const Email = (e) => {
    setEmail(e.target.value);
  };
  
  
  if(status){
    return <Redirect to="/trainer/auth/updatepassword"></Redirect>
  }

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
              <Form.Control type="email" placeholder="Enter email" required onChange={Email} value={email}/>
            </Col>
          </Form.Row>
          <br />
          <br />
          <Form.Row>
            <Col>
              <Link to="/trainer/auth/login" style={buttonStyle}>
                <Button variant="primary" type="submit" block size="md" onClick={Submit}>
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

export default TrainerForgetPaaswoord;
