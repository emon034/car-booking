import React from "react";
const cars = [
  {
    name: 'Tesla Model S',
    price: '$89,990',
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
  },
  {
    name: 'BMW 3 Series',
    price: '$41,250',
    image: 'https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg',
  },
  {
    name: 'Audi A4',
    price: '$39,100',
    image: 'https://i.gaw.to/vehicles/photos/40/19/401931-2020-audi-a4.jpg?640x400',
  },
  {
    name: 'Mercedes C-Class',
    price: '$43,550',
    image: 'https://www.carautodriver.co.uk/files/Mercedes%20C-Class%20Cabriolet.jpeg',
  },
  {
    name: 'Toyota Camry',
    price: '$26,420',
    image: 'https://static3.toyotabharat.com/images/showroom/new-camry/camry-header.jpg',
  },
  {
    name: 'Ford Mustang',
    price: '$30,920',
    image: 'https://imgcdn.zigwheels.ph/large/gallery/exterior/7/1886/ford-mustang-front-angle-low-view-884127.jpg',
  },
];

const Card = () => {
  return (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Product Cars</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hover:scale-105">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                <p className="text-blue-600 font-bold mt-2">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
export default Card;