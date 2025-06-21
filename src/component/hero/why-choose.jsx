import React from "react";

const WhyChoose = () => {
     const features = [
    {
      title: 'Component-Based',
      description: 'React allows you to build reusable UI components for faster development and better structure.',
    },
    {
      title: 'Fast & Efficient',
      description: 'React’s virtual DOM ensures high performance and smooth user experience.',
    },
    {
      title: 'Utility-First Styling',
      description: 'Tailwind CSS provides low-level utility classes for rapid UI building without writing custom CSS.',
    },
    {
      title: 'Responsive by Default',
      description: 'Tailwind makes it easy to build mobile-first and responsive designs with minimal effort.',
    },
    {
      title: 'Huge Ecosystem',
      description: 'Thousands of packages and tools are available in both React and Tailwind ecosystems.',
    },
    {
      title: 'Developer Friendly',
      description: 'React + Tailwind combo speeds up development, is easy to debug, and great for teams.',
    },
  ];

  return (
    <section className="bg-gray-900 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose</h2>
        <p className="text-gray-50 mb-10">Powerful combination for building fast, scalable, and responsive web apps.</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    );
    }
export default WhyChoose;
