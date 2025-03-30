import React, { useState, useEffect } from "react";
import calogo from "../assets/images/calogo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import { VscChromeClose } from "react-icons/vsc";
import { TfiMenu } from "react-icons/tfi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = window.location;

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar")) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={calogo} alt="Company Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">RAJKUMAR RAJPUT & ASSOCIATES</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <VscChromeClose /> : <TfiMenu />}

          {/* <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i> */}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <span
              className={`nav-link dropdown-toggle ${
                activeDropdown === 0 ? "active-dropdown" : ""
              }`}
              onClick={(e) => toggleDropdown(0, e)}
            >
              AboutUs
            </span>
            <ul
              className={`dropdown-menu ${activeDropdown === 0 ? "show" : ""}`}
            >
              <li>
                <Link
                  to="/about"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Vision
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            {location.pathname !== "/" ? (
              <Link
                to="/?section=what"
                className="nav-link"
                onClick={handleLinkClick}
              >
                What
              </Link>
            ) : (
              <ScrollLink
                to="what"
                className="nav-link scroll-link"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                What
              </ScrollLink>
            )}
          </li>

          <li className="nav-item">
            {location.pathname !== "/" ? (
              <Link
                to="/?section=who"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Who
              </Link>
            ) : (
              <ScrollLink
                to="who"
                className="nav-link scroll-link"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                Who
              </ScrollLink>
            )}
          </li>

          <li className="nav-item dropdown">
            <span
              className={`nav-link dropdown-toggle ${
                activeDropdown === 1 ? "active-dropdown" : ""
              }`}
              onClick={(e) => toggleDropdown(1, e)}
            >
              Services
            </span>
            <ul
              className={`dropdown-menu services-dropdown ${
                activeDropdown === 1 ? "show" : ""
              }`}
            >
              <li>
                <Link
                  to="/taxation"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Taxation
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Corporate Laws
                </Link>
              </li>
              <li>
                <Link
                  to="/financial"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Financial Services in Pune
                </Link>
              </li>
              <li>
                <Link
                  to="/cunsultant"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Tax consultant
                </Link>
              </li>
              <li>
                <Link
                  to="/gstconsultant"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  GST Consultant
                </Link>
              </li>
              <li>
                <Link
                  to="/udyog_adhar"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Udyog Aadhar Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/tax_audit"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Tax Auditors
                </Link>
              </li>
              <li>
                <Link
                  to="/cost_accountant_servicess"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Cost Accountant Services
                </Link>
              </li>
              <li>
                <Link
                  to="/shop_Act"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Shop Act Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/tax_saving"
                  className="dropdown-link"
                  onClick={handleLinkClick}
                >
                  Tax Saving Registration
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            {location.pathname !== "/" ? (
              <Link
                to="/?section=contact"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            ) : (
              <ScrollLink
                to="contact"
                className="nav-link scroll-link"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                Contact
              </ScrollLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
  // return (
  //   <nav id="navbar">
  //     <h1 className="logo">
  //       <span className="text-primary">
  //         <img
  //           src={calogo}
  //           width="50px"
  //           style={{ boxSizing: "border-box", marginTop: 10, marginRight: 5 }}
  //         />
  //         RAJKUMAR RAJPUT & ASSOCIATES
  //       </span>
  //     </h1>
  //     <ul style={{ paddingRight: 30 }}>
  //       <li>
  //         <Link
  //           style={{ cursor: "pointer" }}
  //           to="/"
  //           smooth={"true"}
  //           duration={500}
  //         >
  //           Home
  //         </Link>
  //       </li>
  //       <li>
  //         <div className="dropdown">
  //           <Link to="#" className="dropbtn">
  //             AboutUs
  //           </Link>
  //           <div className="dropdown-content" style={{ maxWidth: 50 }}>
  //             <Link
  //               className="dropdownn"
  //               to="/about"
  //               style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //             >
  //               About
  //             </Link>
  //             <Link
  //               className="dropdownn"
  //               to="/vision"
  //               style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //             >
  //               Vision
  //             </Link>
  //           </div>
  //         </div>
  //       </li>

  //       <li>
  //         {location.pathname !== "/" ? (
  //           <Link to="/?section=what">What</Link>
  //         ) : (
  //           <ScrollLink
  //             style={{ cursor: "pointer" }}
  //             to="what"
  //             smooth="true"
  //             duration={500}
  //           >
  //             What
  //           </ScrollLink>
  //         )}
  //       </li>

  //       <li>
  //         {location.pathname !== "/" ? (
  //           <Link to="/?section=who">Who</Link>
  //         ) : (
  //           <ScrollLink
  //             style={{ cursor: "pointer" }}
  //             to="who"
  //             smooth="true"
  //             duration={500}
  //           >
  //             Who
  //           </ScrollLink>
  //         )}
  //       </li>

  //       <li>
  //         <div className="dropdown">
  //           <Link to="#" className="#">
  //             Services
  //           </Link>
  //           <span style={{ backgroundColor: "black" }}>
  //             <div className="dropdown-content">
  //               <Link
  //                 className="dropdownn"
  //                 to="/taxation"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Taxation
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/corporate"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Corporate Lows
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/financial"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Financial Services in Pune
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/cunsultant"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Tax consultant
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/gstconsultant"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 GST Consultant
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/udyog_adhar"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Udyog Aadhar Registration
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/tax_audit"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Tax Auditors
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/cost_accountant_servicess"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Cost Accountant Services
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="/shop_Act"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Shop Act Registration
  //               </Link>
  //               <Link
  //                 className="dropdownn"
  //                 to="#"
  //                 style={{ color: "rgb(50, 42, 42)", textAlign: "center" }}
  //               >
  //                 Tax Saving Registration
  //               </Link>
  //             </div>
  //           </span>
  //         </div>
  //       </li>

  //       <li>
  //         {location.pathname !== "/" ? (
  //           <Link to="/?section=contact">Contact</Link>
  //         ) : (
  //           <ScrollLink
  //             style={{ cursor: "pointer" }}
  //             to="contact"
  //             smooth="true"
  //             duration={500}
  //           >
  //             Contact
  //           </ScrollLink>
  //         )}
  //       </li>
  //     </ul>
  //   </nav>
  // );
};

export default Header;
