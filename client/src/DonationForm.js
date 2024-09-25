import React from "react";
import { Link } from "react-router-dom";

const DonationForm = () => {
  return (
    <div className="min-h-screen bg-backgroundimg py-12 px-4">
      <div className="container mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Donate to ISKCON to Feed the Poor
        </h1>

        {/* Donation Amounts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {[
            { meals: 50, amount: 1000 },
            { meals: 100, amount: 2000 },
            { meals: 250, amount: 5000 },
            { meals: 500, amount: 10000 },
            { meals: 1000, amount: 20000 },
            { meals: 2500, amount: 50000 },
            { meals: 5000, amount: 100000 },
            { meals: 10000, amount: 200000 },
            { meals: 25000, amount: 500000 },
          ].map((donation) => (
            <DonationOption key={donation.meals} {...donation} />
          ))}
        </div>

        {/* Bank Donation Info */}
        <div className="mt-8 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            Donation Through Bank (NEFT/ RTGS)
          </h2>
          <p>
            <strong>Bank Name:</strong> Yes Bank
          </p>
          <p>
            <strong>Account Name:</strong> International Society For Krishna
            Consciousness
          </p>
          <p>
            <strong>Account Number:</strong> 093294600000129
          </p>
          <p>
            <strong>IFSC Code:</strong> YESB0000932
          </p>
        </div>

        <div className="mt-8 text-gray-600">
          <p>
            80G Available As Per Income Tax Act 1961 And Rules Made Thereunder
          </p>
          <p>Income Tax Exemption (80-G) Number AAATI0017PF20219</p>
          <p>
            80G Benefits Cannot Be Availed On Paytm Donations Except Paytm UPI
            Transfer
          </p>
        </div>
      </div>
    </div>
  );
};

// Donation Option Component
const DonationOption = ({ meals, amount }) => {
  return (
    <div className="bg-white text-white rounded-lg shadow-lg p-6 text-center">
      <h3 className="text-xl text-stone-400 font-bold">{`DONATE ${meals} MEALS`}</h3>
      <p className="text-lg text-stone-700  mt-2">{`₹ ${amount}`}</p>
      <button className="mt-4 bg-white  text-blue-600 font-semibold px-4 py-2 rounded">
        <Link to="/payment" state={{ amount }}>
          Donate
        </Link>
      </button>
    </div>
  );
};

export default DonationForm;
