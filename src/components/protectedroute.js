// import React, { Component } from "react";
// import { Link, Switch, Route, Redirect } from "react-router-dom";


// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={props => {
//           if (!AUTHENTICATED) {
//             return <Redirect to="/login" />;
//           }
//           return <Component {...props} />;
//         }}
//       />
//     );
//   };
//   export default ProtectedRoute;