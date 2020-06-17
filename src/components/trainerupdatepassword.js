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

const TrainerUpdatePaaswoord = () => {
  const [password1,setPassword1]=useState("");
  const [password2,setPassword2]=useState("");
  const [message, setMessage]=useState("");
  const [status, setStatus]=useState(false);

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
  const SetPassword=async (event)=>{

    event.preventDefault();
    if(password1===password2){
    await axios.put("/api/v1/trainer/auth/resetpassword/:id", { password1 })
    .then((res) => {
      
      setStatus(res.data.success);
      setMessage(res.data.data)
      
      // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    }).catch((err)=>{
      setStatus(err.response.data.success);
      setMessage(err.response.data.error);

     
    });
  }
    
    setPassword1("");
    setPassword2("");
    

  }
  const Password1 =(e)=>{
    setPassword1(e.target.value);
  }
  const Password2 =(e)=>{
    setPassword2(e.target.value);
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
              <Form.Text style={subheadStyle}>
                Trainer Reset Your Password
              </Form.Text>
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={Password1} />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={Password2} />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Link to="/trainer/auth/login" style={buttonStyle}>
                <Button variant="primary" type="submit" block size="md" onClick={SetPassword}>
                  Set new password
                </Button>
              </Link>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Container>
  );
};

export default TrainerUpdatePaaswoord;
