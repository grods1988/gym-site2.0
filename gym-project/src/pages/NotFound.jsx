import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default NotFound;
