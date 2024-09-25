import React from "react";
import home_life_membership from "./assets/servicefolder/home_life_membership.png";
import home_bhaktisadan from "./assets/servicefolder/home_bhaktisadan.jpg";
import home_prasad from "./assets/servicefolder/home_prasad.jpg";
import home_sunday_feast from "./assets/servicefolder/home_sunday_feast.jpg";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-backgroundimg">
      {/* Heading Section */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-stone-500">Our Main Services</h1>
        <p className="mt-4 text-lg text-stone-600 px-6 md:px-48">
          Although our temple has numerous departments performing various
          different services, the main focus is on the deity worship, prasadam
          distribution, studying and distributing Srila Prabhupada’s books, and
          all other functions carried out in the temple are all meant to support
          and encourage the betterment and success of these key services.
        </p>
      </div>

      {/* Donation Categories */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Janmashtami Seva */}
          <ServiceCard
            title="Janmashtami Seva"
            description="Participate in the grand festival of Janmashtami by donating for the seva."
            image={home_life_membership}
            link="#"
          />

          {/* Annadan Seva */}
          <ServiceCard
            title="Annadan Seva"
            description="Contribute to feed the needy through our Annadan seva program."
            image={home_bhaktisadan}
            link="#"
          />

          {/* Temple Seva */}
          <ServiceCard
            title="Temple Seva"
            description="Help in maintaining and beautifying the temple by donating to Temple Seva."
            image={home_prasad}
            link="#"
          />

          {/* Nitya Seva */}
          <ServiceCard
            title="Nitya Seva"
            description="Support the daily rituals and offerings to the deities through Nitya Seva."
            image={home_sunday_feast}
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

// Donation Card Component with Image
const ServiceCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center p-2">
        <img src={image} alt={title} className="w-36 h-36 object-cover" />{" "}
        {/* Full width with fixed height */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ServicePage;
