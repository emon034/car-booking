import React from 'react';



const OurMission = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-8">
            Our Mission
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Soldier Image */}
        <div className="w-full md:w-1/2 mt-5">
          <img
            src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mikebirdy-120049.jpg&fm=jpg"
            alt="Featured Soldier"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Soldier Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Our Mission
          </h2>
          <p className="text-xl font-semibold">Captain John Walker</p>
          <p className="text-gray-300">
            Captain John Walker is a decorated soldier who has served with honor and bravery.
            He has led several successful missions and is known for his strategic thinking and courage.
          </p>
          <p className="text-gray-300">
            Captain John Walker is a decorated soldier who has served with honor and bravery.
            He has led several successful missions and is known for his strategic thinking and courage.
          </p>
         

        </div>
      </div>
    </div>

  );
}
export default OurMission;