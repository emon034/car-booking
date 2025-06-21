import React from "react";
 


const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Drive Your Dream Car Today
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Explore our latest collection of premium cars with unbeatable offers. Book a test drive now!
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl text-lg">
            Explore Cars
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small_2x/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg" // Adjust the path as necessary
            alt="Luxury Car"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>

  );
}
export default Hero;