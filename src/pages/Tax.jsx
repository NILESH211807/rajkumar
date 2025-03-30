import React from "react";

const Tax = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        marginTop: "30px",
        marginLeft: "60px",
        color: "rgb(95, 92, 92)",
        fontFamily:
          "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana",
      }}
    >
      <>
        <p
          style={{
            textDecoration: "dotted",
            color: "gray",
            fontSize: "xx-small",
            border: "1.5px dashed gray",
          }}
        ></p>
        <h2>Income Tax</h2>
        <h2>What is Income Tax?</h2>
        <p>
          Income tax is a direct tax collected by the government from
          individuals, businesses and other entities. It is governed by the
          Income Tax Act, 1961 and managed by the Income Tax Department of
          India.
        </p>
        <ul>
          <li>Salary &amp; Wages – Income from employment</li>
          <li>
            Business &amp; Profession – Profits earned by self employed
            individuals and businesses.
          </li>
          <li>
            Capital Gains – Profits from sale of shares, properties and other
            assets.
          </li>
          <li>House Property – Rental income from real estate.</li>
          <li>
            Other Sources – Interest income, dividends, lottery winnings etc.
          </li>
        </ul>
        <h2>Tax Deductions &amp; Savings:</h2>
        <p>
          Government encourages savings and investments through tax benefits
          under various sections:
        </p>
        <ul>
          <li>
            Section 80C – Investments in PPF, ELSS, NSC, EPF and life insurance
            (Deduction up to ₹1,50,000).
          </li>
          <li>Section 80D – Health insurance premium deductions.</li>
          <li>Section 24(b) – Home loan interest deduction.</li>
          <li>Section 80E – Education loan interest deduction.</li>
        </ul>
        <br />
        <h2 style={{ color: "black" }}>How to File Income Tax Returns (ITR)</h2>
        <h3>Pre-requisites for E-Filing:</h3>
        <ul>
          <li>PAN (Permanent Account Number)</li>
          <li>Aadhaar Card (mandatory for linking with PAN)</li>
          <li>Bank Account Details (for tax refunds)</li>
          <li>Form 16 (for salaried employees)</li>
          <li>Investment &amp; Deduction Proofs</li>
        </ul>
        <br />
        <h2>E-Filing on Government Portal:</h2>
        <ul>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>
              Visit Income Tax Department Website → https://www.incometax.gov.in
            </span>
          </li>
          <li>Download ITR Software for the relevant assessment year.</li>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>
              Enter Income Details –
            </span>
            Salary, business income, capital gains etc.
          </li>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>
              Pre-fill Tax Information –{" "}
            </span>
            Portal auto-fills the details from tax records.
          </li>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>
              Compute Tax –
            </span>
            System will calculate tax payable/refund based on the entries.
          </li>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>
              Pay Tax (if applicable) –{" "}
            </span>
            If tax is due, pay online.
          </li>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>
              Generate &amp; Upload XML –
            </span>
            Save the form and upload to the portal.
          </li>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>
              E-Verify –{" "}
            </span>
            Verify through Aadhaar OTP, net banking or digital signature.
          </li>
          <li>
            <span style={{ fontSize: "large", color: "black" }}>Submit –</span>{" "}
            A confirmation email/SMS is sent after submission.
          </li>
        </ul>
        <h3>After Filing:</h3>
        <li>
          Refund: If excess tax is paid, a refund will be processed within 30-45
          days.
        </li>
        <li>Rectification: Taxpayers can edit ITR if mistakes are found.</li>
        <h1>Key Takeaways</h1>'
        <p>
          Filing ITR is mandatory and helps build a nation. File before time,
          claim deductions, and be compliant to avoid fines.
        </p>
      </>
    </div>
  );
};

export default Tax;
