import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import Gallery from "./Gallery";
import DonationPage from "./DonationPage";
import DonationForm from "./DonationForm";
import Payment from "./Payment";
import Footer from "./Footer";
import ServicePage from "./ServicesPage";

function HomePage() {
  return (
    <div>
      <Home />
      <Gallery />
      <ServicePage />
      <DonationPage />

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donation" element={<DonationForm />} />
        <Route path="/payment" element={<Payment />} />
        {/* You can add more routes as needed */}
        <Route path="*" element={<Navigate to="/" />} />{" "}
        {/* Redirects to home for any unmatched routes */}
      </Routes>
    </Router>
  );
}

export default App;
