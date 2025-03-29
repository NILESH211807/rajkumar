import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Taxation from "./pages/Taxation";
import Corporate from "./pages/Corporate";
import Financial from "./pages/Financial";
import Cunsultant from "./pages/Cunsultant";
import Gstconsultant from "./pages/Gstconsultant";
import UdyogAdhar from "./pages/UdyogAdhar";
import TaxAudit from "./pages/TaxAudit";
import CostAccountantServices from "./pages/CostAccountantServices";
import ShopAct from "./pages/ShopAct";
import Tax from "./pages/Tax";
import AuditAssurance from "./pages/AuditAssurance";
import Consultancy from "./pages/Consultancy";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import Success from "./pages/Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/vision"
          element={
            <Layout>
              <Vision />
            </Layout>
          }
        />
        <Route
          path="/taxation"
          element={
            <Layout>
              <Taxation />
            </Layout>
          }
        />
        <Route
          path="/corporate"
          element={
            <Layout>
              <Corporate />
            </Layout>
          }
        />
        <Route
          path="/financial"
          element={
            <Layout>
              <Financial />
            </Layout>
          }
        />
        <Route
          path="/cunsultant"
          element={
            <Layout>
              <Cunsultant />
            </Layout>
          }
        />
        <Route
          path="/gstconsultant"
          element={
            <Layout>
              <Gstconsultant />
            </Layout>
          }
        />
        <Route
          path="/udyog_adhar"
          element={
            <Layout>
              <UdyogAdhar />
            </Layout>
          }
        />
        <Route
          path="/tax_audit"
          element={
            <Layout>
              <TaxAudit />
            </Layout>
          }
        />
        <Route
          path="/cost_accountant_servicess"
          element={
            <Layout>
              <CostAccountantServices />
            </Layout>
          }
        />
        <Route
          path="/shop_Act"
          element={
            <Layout>
              <ShopAct />
            </Layout>
          }
        />
        <Route
          path="/tax"
          element={
            <Layout>
              <Tax />
            </Layout>
          }
        />
        <Route
          path="/audit_assurance"
          element={
            <Layout>
              <AuditAssurance />
            </Layout>
          }
        />
        <Route
          path="/consultancy"
          element={
            <Layout>
              <Consultancy />
            </Layout>
          }
        />

        <Route
          path="/thanks-for-submission"
          element={
            <Layout>
              <Success />
            </Layout>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
