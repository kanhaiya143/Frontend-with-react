import React from "react";


import {
  Link,
  BrowserRouter as Router,
  Route,
  IndexRoute,
} from "react-router-dom";
import { Button,Form ,Col,Container} from "react-bootstrap";

const TrainerDashboard = () => {
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

  return (
    <Container fluid>
      <div className="Signup">
        <br />
        <Form className="Fields" >
          <Form.Row>
            <Col>
              <Form.Text style={headStyle}>TREAD</Form.Text>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Text style={subheadStyle}>Trainer Logout, view profile </Form.Text>
            </Col>
          </Form.Row>

          <br />

          
          <br />
          <Form.Row>
            <Col>
              
                <Link to="/" style={buttonStyle}>
                <Button  variant="primary" type="submit" block size="md">
                  Logout
                  </Button>
                </Link>
              
              {/* <Button variant="primary" type="submit" block size="md">
                Create your account
              </Button> */}
            </Col>
          </Form.Row>
          <br/>
          <Form.Row>
            <Col>
            
              <Link to="/trainer/auth/me" style={buttonStyle}>
              <Button  variant="primary" type="submit" block size="md">
                Trainer Profile
                </Button>
              </Link>
           
            </Col>
          </Form.Row>
          
          
        </Form>
      </div>
    </Container>
  );
};

export default TrainerDashboard;
