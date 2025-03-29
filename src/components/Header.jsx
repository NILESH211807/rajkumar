import React, { useEffect } from "react";
import calogo from "../assets/images/calogo.png";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const location = useLocation();

  return (
    <nav id="navbar">
      <h1 className="logo">
        <span className="text-primary">
          <img
            src={calogo}
            width="50px"
            style={{ boxSizing: "border-box", marginTop: 10, marginRight: 5 }}
          />
          RAJKUMAR RAJPUT
        </span>
        &amp; ASSOCIATES
      </h1>
      <ul style={{ paddingRight: 30 }}>
        <li>
          <Link
            style={{ cursor: "pointer" }}
            to="/"
            smooth={"true"}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <div className="dropdown">
            <Link to="#" className="dropbtn">
              About Us
            </Link>
            <div className="dropdown-content" style={{ maxWidth: 50 }}>
              <Link
                className="dropdownn"
                to="/about"
                style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
              >
                About
              </Link>
              <Link
                className="dropdownn"
                to="/vision"
                style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
              >
                Vision
              </Link>
            </div>
          </div>
        </li>

        <li>
          {location.pathname !== "/" ? (
            <Link to="/?section=what">What</Link>
          ) : (
            <ScrollLink
              style={{ cursor: "pointer" }}
              to="what"
              smooth="true"
              duration={500}
            >
              What
            </ScrollLink>
          )}
        </li>

        <li>
          {location.pathname !== "/" ? (
            <Link to="/?section=who">Who</Link>
          ) : (
            <ScrollLink
              style={{ cursor: "pointer" }}
              to="who"
              smooth="true"
              duration={500}
            >
              Who
            </ScrollLink>
          )}
        </li>

        <li>
          <div className="dropdown">
            <Link to="#" className="#">
              Services
            </Link>
            <span style={{ backgroundColor: "black" }}>
              <div className="dropdown-content">
                <Link
                  className="dropdownn"
                  to="/taxation"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Taxation
                </Link>
                <Link
                  className="dropdownn"
                  to="/corporate"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Corporate Lows
                </Link>
                <Link
                  className="dropdownn"
                  to="/financial"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Financial Services in Pune
                </Link>
                <Link
                  className="dropdownn"
                  to="/cunsultant"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Tax consultant
                </Link>
                <Link
                  className="dropdownn"
                  to="/gstconsultant"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  GST Consultant
                </Link>
                <Link
                  className="dropdownn"
                  to="/udyog_adhar"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Udyog Aadhar Registration
                </Link>
                <Link
                  className="dropdownn"
                  to="/tax_audit"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Tax Auditors
                </Link>
                <Link
                  className="dropdownn"
                  to="/cost_accountant_servicess"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Cost Accountant Services
                </Link>
                <Link
                  className="dropdownn"
                  to="/shop_Act"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Shop Act Registration
                </Link>
                <Link
                  className="dropdownn"
                  to="#"
                  style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
                >
                  Tax Saving Registration
                </Link>
              </div>
            </span>
          </div>
        </li>

        <li>
          {location.pathname !== "/" ? (
            <Link to="/?section=contact">Contact</Link>
          ) : (
            <ScrollLink
              style={{ cursor: "pointer" }}
              to="contact"
              smooth="true"
              duration={500}
            >
              Contact
            </ScrollLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
