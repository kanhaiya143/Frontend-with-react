import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import TrainerRegister from "./components/TrainerSignup";
import TrainerLogin from "./components/trainerlogin";
import TrainerMe from "./components/trainerme";
import TrainerUpdatedetails from "./components/trainerupdatedetails";
import TrainerUpdatepassword from "./components/trainerupdatepassword";
import TrainerDashBoard from "./components/trainerdashboard";
import TrainerForgetPassword from "./components/trainerforgetpassword";
import TrainerHome from "./components/trainerhome";

import ClientRegister from "./components/ClientSignup";
import ClientLogin from "./components/clientlogin";
import ClientMe from "./components/clientme";
import ClientUpdatedetails from "./components/clientupdatedetails";
import ClientUpdatepassword from "./components/clientupdatepassword";
import ClientDashBoard from "./components/clientdashboard";
import ClientForgetPassword from "./components/clientforgetpassword";
import ClientHome from "./components/clienthome";
import ProtectedRoute from "./components/protectedroute";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact strict path="/" component={Home} />

        <Route exact strict path="/trainer/home" component={TrainerHome} />
        <Route
          exact
          strict
          path="/trainer/auth/register"
          component={TrainerRegister}
        />
        <Route
          exact
          strict
          path="/trainer/auth/login"
          component={TrainerLogin}
        />
        {/* <Route exact strict path="trainer/auth/logout" component={TrainerLogout} /> */}
        <Route exact strict path="/trainer/auth/me" component={TrainerMe} />
        <Route
          exact
          strict
          path="/trainer/auth/updatedetails"
          component={TrainerUpdatedetails}
        />
        <Route
          exact
          strict
          path="/trainer/auth/updatepassword"
          component={TrainerUpdatepassword}
        />
        <Route
          exact
          strict
          path="/trainer/auth/dashboard"
          component={TrainerDashBoard}
        />
        <Route
          exact
          strict
          path="/trainer/auth/forgotpassword"
          component={TrainerForgetPassword}
        />

        <Route exact strict path="/client/home" component={ClientHome} />
        <Route
          exact
          strict
          path="/client/auth/register"
          component={ClientRegister}
        />
        <Route exact strict path="/client/auth/login" component={ClientLogin} />
        {/* <Route exact strict path="client/auth/logout" component={ClientLogout} /> */}
        <Route exact strict path="/client/auth/me" component={ClientMe} />
        <Route
          exact
          strict
          path="/client/auth/updatedetails"
          component={ClientUpdatedetails}
        />
        <Route
          exact
          strict
          path="/client/auth/updatepassword"
          component={ClientUpdatepassword}
        />
        <Route
          exact
          strict
          path="/client/auth/dashboard"
          component={ClientDashBoard}
        />
        <Route
          exact
          strict
          path="/client/auth/forgotpassword"
          component={ClientForgetPassword}
        />
      </Switch>
    </Router>
  );
};

export default App;
