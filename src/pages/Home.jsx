import React, { useEffect, useRef, useState } from "react";
import calogo from "../assets/images/calogo.png";
import income from "../assets/images/income.jpg";
import audit from "../assets/images/AUDIT.jpg";
import consultancy from "../assets/images/Consultancy.jpg";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // API base url
  const BASE_URL = "http://localhost/dashboard/PHP_CODE/for%20data%20mail";

  useEffect(() => {
    if (!window.google) return;

    const loc = { lat: 28.630044, lng: 77.372082 };

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 14,
      center: loc,
    });

    new window.google.maps.Marker({
      position: loc,
      map: map,
    });
  }, []);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();

      const formData = new URLSearchParams();
      formData.append("name", nameRef.current.value);
      formData.append("email", emailRef.current.value);
      formData.append("phone", phoneRef.current.value);
      formData.append("query", subjectRef.current.value);
      formData.append("message", messageRef.current.value);

      const response = await fetch(`${BASE_URL}/submit.php`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server Error: ${errorText || response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully!");
        navigate("/thanks-for-submission");
        // Reset form fields after submission
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";
      } else {
        toast.error(data?.message || "Something went wrong.");
      }

      // console.log(data);
    } catch (error) {
      console.error("Fetch error:", error.message);
      toast.error(error.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Header: Showcase */}
      <header id="showcase">
        <div className="showcase-content">
          <h4 className="l-heading">
            <img src={calogo} alt="" style={{ width: 90, marginTop: 10 }} />
            <br />
            WELCOME TO
            <br />
          </h4>
          <h2>
            <span
              style={{
                color: "white",
                fontSize: "xx-large",
                fontFamily:
                  '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
                width: 50,
              }}
            >
              RAJKUMAR RAJPUT &amp; ASSOCIATES
            </span>
          </h2>
          <p
            className="lead"
            style={{ color: "white", fontSize: "x-large", paddingBottom: 10 }}
          >
            Chartered Accountants
          </p>
          <ScrollLink
            style={{ cursor: "pointer" }}
            to="what"
            smooth={true}
            duration={500}
            className="btn"
          >
            Read More
          </ScrollLink>
        </div>
      </header>
      {/* Section: What we do */}
      <section
        id="what"
        className="bg-light py-1 "
        style={{ marginRight: 100 }}
      >
        <div className="container">
          <h2 className="m-heading text-center">
            <span className="text-primary">
              <span style={{ color: "green" }}>OUR</span> SERVICES
            </span>
          </h2>
          <div className="items" style={{ gap: 10 }}>
            <div className="item">
              <div>
                <img
                  src={income}
                  className="img_texx"
                  style={{
                    display: "block",
                    width: 300,
                    height: 150,
                    paddingLeft: 20,
                  }}
                />
                <h3> Income Tax </h3>
                <p>
                  Consultancy on various intricate matters pertaining to Income
                  tax, Effective tax management, tax structuring and advisory
                  services, Tax Planning for Corporates and others, Designing /
                  restructuring salary structure to minimise tax ...
                  <br />
                  <br />
                  <Link to="/tax" style={{ marginLeft: 85 }}>
                    read more
                  </Link>
                </p>
              </div>
            </div>
            <div className="item">
              <div>
                <img src={audit} className="img_texx" />
                <h3>Audit &amp; assurance</h3>
                <p>
                  Both an audit and an assurance can help companies determine
                  the accuracy of their financial reporting. They also help
                  ensure that a company complies with all relevant laws and
                  regulations. If you're in a management role, learning ...
                  <br /> <br />
                  <Link to="/audit_assurance" style={{ marginLeft: 85 }}>
                    READ MORE
                  </Link>
                </p>
              </div>
            </div>
            <div className="item">
              <div>
                <img src={consultancy} className="img_texx" />
                <h3>Consultancy</h3>
                <p>
                  Accounting and Book-keeping Services Payroll Processing
                  Services Management Reporting FEMA related Services including
                  filings with RBI Advance Ruling Representational Services
                  Project Reports for Bank Approvals...
                  <br />
                  <br />
                  <Link to="/consultancy" style={{ marginLeft: 85 }}>
                    READ MORE
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section: Who we are */}
      <section id="who">
        <div className="who-img" />
        <div
          className="who-text bg-dark p-2"
          style={{
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          }}
        >
          <h2 className="m-heading">
            <span className="text-primary">ABOUT</span>
            US
          </h2>
          <p>
            <span
              style={{
                fontFamily:
                  '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
              }}
            >
              M/s RAJKUMAR RAJPUT
            </span>
            is a member of the Institute of Chartered Accountants of India
            (ICAI) since 1990. He has vast experience in consultancy of direct
            taxes and handling corporate affairs in different areas.
          </p>
          <p>
            <span
              style={{
                fontFamily:
                  '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
              }}
            >
              M/s RAJKUMAR RAJPUT &amp; ASSOCIATES
            </span>
            is a leading chartered accountancy firm rendering comprehensive
            professional services which include Audit, Management Consultancy,
            Tax Consultancy, Accounting Services, Manpower Management,
            Secretarial Services etc.
          </p>
          <p>
            <span
              style={{
                fontFamily:
                  '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
              }}
            >
              M/s RAJKUMAR RAJPUT &amp; ASSOCIATES
            </span>
            is a professionally managed firm. The team consists of distinguished
            Chartered Accountants, Corporate Financial Advisors and Tax
            Consultants. The firm represents a combination of specialized
            skills, which are geared to offers sound financial advice and
            personalized proactive services. Those associated with the firm have
            regular interaction with industry and other professionals which
            enables the firm to keep pace with contemporary developments and to
            meet the needs of its clients.
          </p>
        </div>
      </section>
      {/* Section: Clients */}
      <section id="clients" className="py-1 bg-light">
        <div className="container">
          <h2 className="m-heading text-center">
            <span className="text-primary">Our</span>
            Clients
          </h2>
          <div className="items py-1">
            <div>
              <img src={logo1} alt="client" />
              RAJKUMAR RAJPUT &amp; ASSOCIATES
            </div>
            <div>
              <img src={logo2} alt="client" />
              Chartered Accountants
            </div>
            <div>
              <img src={logo3} alt="client" />
              <h2>Head Office Saswad</h2>
              <h2>IN CHARGE : CA. RAJKUMAR RAJPUT </h2>
              <p>
                FLAT NO 8 2nd Floor, Mandar Complex, Opp St Stand,
                <br /> Saswad, Pune, Maharashtra, India- 412301
              </p>
            </div>
            <div>
              <img src={logo4} alt="client" /> <h2>Mobile No.:</h2>
              <Link to="tel:9822990724">822990724</Link> <p>9822990724</p>
            </div>
            <div>
              <img src={logo5} alt="client" />
              <h2>E-mail:</h2>
              <p>
                <Link to="mailto:rajkumar.rajput045@gmail.com">
                  rajkumar.rajput045@gmail.com
                </Link>
                {/*,p*/}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Contact*/}
      <section id="contact">
        <div className="contact-form bg-primary p-2">
          <h2 className="m-heading">Contact Us</h2>
          <p>Please use the form below to contact us</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                ref={nameRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Your Mobile Number"
                ref={phoneRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject of Query</label>
              <select id="subject" ref={subjectRef}>
                <option value="">---Please Select---</option>
                <option value="Income Tax">Income Tax</option>
                <option value="Audit">Audit</option>
                <option value="Service Tax">Service Tax</option>
                <option value="Company Law">Company Law</option>
                <option value="Excise Duty">Excise Duty</option>
                <option value="Customs">Customs</option>
                <option value="Wealth Tax">Wealth Tax</option>
                <option value="Sales Tax">Sales Tax/Value Added Tax</option>
                <option value="FEMA">FEMA</option>
                <option value="RBI">RBI</option>
                <option value="Labour Law">Labour Law</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Please Enter your Message"
                ref={messageRef}
              />
            </div>
            <input
              type="submit"
              disabled={isLoading}
              value={isLoading ? "Please wait..." : "Send"}
              className="btn btn-dark"
            />
          </form>
        </div>
        <div ref={mapRef} className="map" />;
      </section>
    </>
  );
};

export default Home;
