import React from "react";


const brands = [
  {
    name: 'Tesla',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
  },
  {
    name: 'BMW',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
  },
  {
    name: 'Toyota',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvFFiWyiYwMUGZ5M2BOsMICVQPze5FYg7_Q&s',
  },
  {
    name: 'Mercedes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
  },
  {
    name: 'Ford',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
  },
  {
    name: 'Audi',
    image: 'https://image.similarpng.com/file/similarpng/very-thumbnail/2020/09/Audi-logo-icon-on-transparent-background-PNG.png',
  },
];

const Brands = () => {
  return (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center  ">
        <h2 className="text-3xl font-bold mb-8 text-white">Trusted Brands</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 hover:scale-105">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img src={brand.image} alt={brand.name} className="h-16 mb-4 object-contain" />
              <h3 className="text-lg font-semibold text-gray-700">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
export default Brands;