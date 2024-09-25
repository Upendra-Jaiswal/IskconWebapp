import React from "react";
import janmashtamiImage from "./assets/donationimages/JANMASHTAMI_SEVA_l.webp";
import annadanImage from "./assets/donationimages/Annadaan_Bs44o6r.webp";
import templeSevaImage from "./assets/donationimages/donation02.png";
import nityaSevaImage from "./assets/donationimages/NITYA_SEVA.webp";
import { Link } from "react-router-dom";

const DonationPage = () => {
  return (
    <div className="min-h-screen  bg-backgroundimg">
      {/* Heading Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-stone-500">Donation</h1>
        <p className="mt-4 text-lg text-stone-600 px-6 md:px-48">
          Krishna once said that good deeds, when made, gifted, frugal, and done
          without faith, are shown as "assat," meaning they are of no value.
          Therefore, such deeds are neither useful here nor in the afterlife.
          Let us take a step closer to the devotion of Kanha and do our part to
          help those in need.
        </p>
      </div>

      {/* Donation Categories */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Janmashtami Seva */}
          <DonationCard
            title="Janmashtami Seva"
            description="Participate in the grand festival of Janmashtami by donating for the seva."
            image={janmashtamiImage}
            link="#"
          />

          {/* Annadan Seva */}
          <DonationCard
            title="Annadan Seva"
            description="Contribute to feed the needy through our Annadan seva program."
            image={annadanImage}
            link="#"
          />

          {/* Temple Seva */}
          <DonationCard
            title="Temple Seva"
            description="Help in maintaining and beautifying the temple by donating to Temple Seva."
            image={templeSevaImage}
            link="#"
          />

          {/* Nitya Seva */}
          <DonationCard
            title="Nitya Seva"
            description="Support the daily rituals and offerings to the deities through Nitya Seva."
            image={nityaSevaImage}
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

// Donation Card Component with Image
const DonationCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-2">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <Link to="/donation">
          <button className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Donate Now
          </button>
        </Link>
      </div>
      //{" "}
    </div>
  );
};

export default DonationPage;
