import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Featured 1',
    image: 'https://www.kia.com/content/dam/kia/us/en/vehicles/k5/2025/trims/lxs/exterior/0c0c0c/8-frame/36.png',
    description: 'Description for featured item 1.',
  },
  {
    id: 2,
    title: 'Featured 2',
    image: 'https://www.kia.com/content/dam/kia/us/en/vehicles/k5/2025/trims/lxs/exterior/0c0c0c/8-frame/36.png',
    description: 'Description for featured item 2.',
  },
  {
    id: 3,
    title: 'Featured 3',
    image: 'https://www.kia.com/content/dam/kia/us/en/vehicles/k5/2025/trims/lxs/exterior/0c0c0c/8-frame/36.png',
    description: 'Description for featured item 3.',
  },
  {
    id: 4,
    title: 'Featured 4',
    image: 'https://www.kia.com/content/dam/kia/us/en/vehicles/k5/2025/trims/lxs/exterior/0c0c0c/8-frame/36.png',
    description: 'Description for featured item 4.',
  },
];

const FeaturedCards = () => {
  return (
    <div className="max-w-full mx-auto px-4 py-8 bg-gray-900 w-full">
      <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Featured Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-900 border-spacing-2 border-gray-500 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
            transition-shadow duration-300 hover:scale-105"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-white text-sm mt-1">{card.description}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                <a href="/login">Learn More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCards;