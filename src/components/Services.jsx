import React from 'react';
import { faHammer, faTruck, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  { title: "Construction", icon: faHammer, desc: "Residential & commercial building construction." },
  { title: "Logistics", icon: faTruck, desc: "Material delivery and site logistics support." },
  { title: "Consulting", icon: faBuilding, desc: "Architectural and structural consulting services." },
];

const Services = () => {
  return (
    <section className="bg-black py-16 px-6" id="services">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-300">Our Service</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-200 rounded-xl shadow-lg p-6 w-full max-w-sm hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={service.icon} className="text-3xl text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
