import React from "react";
// Import Font Awesome icons
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import image from "./assets/footer/footer.jpg";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center"
    >
      <footer className="p-6 md:p-9 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* 1st Column */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">About Us</h4>
            <ul className="text-white">
              {[
                "ISKCON Delhi",
                "What is ISKCON?",
                "Srila Prabhupada",
                "What is YDID?",
                "Blog",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 2nd Column */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Looking</h4>
            <ul className="text-white">
              {["Kirtan", "Katha", "Offer Puja"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-yellow-400 font-semibold mt-4 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* 3rd Column */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">YDID</h4>
            <ul className="text-white">
              {[
                "Brahmana Bhoj Seva",
                "Sri Vigraha Seva",
                "Sadhu Seva",
                "Gyan Daan Seva",
                "Rajbhog",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Column (Donate) */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Donate</h4>
            <ul className="text-white">
              {[
                "Food for Life",
                "Nitya Seva",
                "Bhisma Life Patron Care",
                "Deity Service",
                "Devotee Prasad",
                "Value Education to Youth",
                "General Donation",
                "Become an Affiliate",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 5th Column (Contact) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>
            <p className="text-white mb-4">
              <strong>Location:</strong>
              <br />
              Bhisma Department,
              <br />
              ISKCON - Glory of India Cultural Centre,
              <br />
              Sant Nagar, East of Kailash,
              <br />
              New Delhi
            </p>
            <p className="text-white mb-4">
              <strong>Phone:</strong>
              <br />
              +91 9289774500, 011-26280063
            </p>
            <p className="text-white">
              <strong>Email:</strong>
              <br />
              <a
                href="mailto:info@iskcondelhiofferings.com"
                className="hover:underline"
              >
                info@iskcondelhiofferings.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
