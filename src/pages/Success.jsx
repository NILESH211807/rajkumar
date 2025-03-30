import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="success"
      className="bg-primary py-3 text-center"
    >
      <div className="container">
        <h2 className="l-heading">Thank You For Submission</h2>
        <p className="lead">We will get back to you soon</p>
        <Link to="/">Go Back</Link>
      </div>
    </section>
  );
};

export default Success;
