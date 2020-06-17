import React from "react";
import { Button } from "@material-ui/core";

import {
  Link,
  BrowserRouter as Router,
  Route,
  IndexRoute,
} from "react-router-dom";

const Home = () => {
  const buttonStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div className="Home">
      <Link to="/trainer/home" style={buttonStyle}>
        <Button variant="contained" color="primary">
          Trainer
        </Button>
      </Link>

      <Link to="/client/home" style={buttonStyle}>
        <Button variant="contained" color="primary">
          Client
        </Button>
      </Link>
    </div>
  );
};

export default Home;
