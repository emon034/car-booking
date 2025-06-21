import React from "react";

const Approch = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-8">
        Our Approach
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Our Approach
          </h2>
            <p className="text-xl font-semibold">
            To be the best place where innovation meets purpose, <br />
             and people come together to build a brighter, smarter,<br />
              and more connected future
          </p>
          <p className="text-gray-300">
            We believe in a customer-centric approach, ensuring that every interaction is tailored to meet your needs.
          </p>
          <p className="text-gray-300">
            Our team is dedicated to providing exceptional service and support, making your experience seamless and enjoyable.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-5">
          <img
            src="https://img.freepik.com/free-photo/beautiful-woman-buying-car_1303-13451.jpg?semt=ais_items_boosted&w=740"
            alt="Approach"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default Approch;