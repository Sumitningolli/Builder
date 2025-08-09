import React from 'react';
import building1 from '../assets/building1.jpg';
import building2 from '../assets/building2.jpg';
import building3 from '../assets/building3.jpg';

const projects = [
  { image: building1, title: "Skyline Heights" },
  { image: building2, title: "Green Valley Towers" },
  { image: building3, title: "Royal Residency" },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-white" id="projects">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Projects</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center items-center">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
