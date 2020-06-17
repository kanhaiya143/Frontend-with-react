import React from "react";


import {
  Link,
  BrowserRouter as Router,
  Route,
  IndexRoute,
} from "react-router-dom";
import { Button,Form ,Col,Container} from "react-bootstrap";

const TrainerMe = () => {
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
              <Form.Text style={subheadStyle}>Trainer profile </Form.Text>
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Col>
            
              <Link to="/trainer/auth/updatedetails" style={buttonStyle}>
              <Button  variant="primary" type="submit" block size="md">
                Trainer Profile Update
                </Button>
              </Link>
            
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Container>
  );
};

export default TrainerMe;
