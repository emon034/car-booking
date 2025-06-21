import React from "react";

const carParts = [
  {
    title: "Engine",
    image: "https://c8.alamy.com/comp/2K2KKK6/3d-illustration-of-a-car-engine-block-and-pistons-3d-illustration-2K2KKK6.jpg",
    details: "Engine inspection, oil change, spark plug check, and performance tuning.",
    price: "Starting at $120",
  },
  {
    title: "Tires",
    image: "https://www.shutterstock.com/image-photo/black-car-parked-on-side-600nw-2460109715.jpg",
    details: "Tire rotation, alignment, air pressure check, and replacements available.",
    price: "Starting at $60/tire",
  },
  {
    title: "Battery",
    image: "https://media.istockphoto.com/id/106545560/photo/auto-mechanic-replacing-car-battery.jpg?s=612x612&w=0&k=20&c=R582NLS4GlDiUTc6Cf3iBwM5_K24LqV4PG9Ew1ZaU9M=",
    details: "Battery testing, voltage check, corrosion cleaning, and replacements.",
    price: "Starting at $90",
  },
  {
    title: "Brakes",
    image: "https://media.gettyimages.com/id/522394158/photo/car-service-procedure.jpg?s=612x612&w=gi&k=20&c=PGLpIJbn31H97zYkGRgOLa1ng894EZXJt0M4Vveh0j4=",
    details: "Brake pads, fluid check, disc inspection, and complete brake service.",
    price: "Starting at $70",
  },
  {
    title: "AC System",
    image: "https://media.istockphoto.com/id/1318239818/photo/car-air-conditioning-system-air-condition-switched-on-maximum-cooling-mode.jpg?s=612x612&w=0&k=20&c=dB32-WZ1q-rzDbZgR1fv1nW8YTsE0V_zAWeUJdh-IrE=",
    details: "Gas refill, filter cleaning, performance diagnostics, and repairs.",
    price: "Starting at $50",
  },
  {
    title: "Interior Cleaning",
    image: "https://www.shutterstock.com/image-photo/man-cleaning-car-interior-detailing-600nw-743191834.jpg",
    details: "Vacuuming, sanitizing, dashboard polish, seat cleaning, and deodorizing.",
    price: "Starting at $40",
  },
];




const Services = () => {
  return (
     <div className="max-w-full mx-auto px-4 py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Car Parts & Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carParts.map((part, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden hover:scale-105"
          >
            <img
              src={part.image}
              alt={part.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{part.title}</h3>
              <p className="text-white text-sm mb-3">{part.details}</p>
              <span className="text-blue-600 font-semibold">{part.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

   
  );
};

export default Services;