import React from "react";
const cards = [
  {
    id: 1,
    title: 'Toyota Corolla',
    image: 'https://www.drivearabia.com/carprices/media/catalog/682eff3395226toyota_corolla_front.webp',
    price: '$25,000',
    description: 'Description for featured item 1.',
  },
  {
    id: 2,
    title: 'Honda Civic',
    image: 'https://di-shared-assets.dealerinspire.com/legacy/rackspace/ldm-images/2019-Honda-Civic-Modern-Steel-Metallic.png',
    price: '$27,000',
    description: 'Description for featured item 2.',
  },
  {
    id: 3,
    title: 'Tesla Model 3',
    image: 'https://cdn.prod.website-files.com/60ce1b7dd21cd517bb39ff20/6153cdf8aec0a73b65af24c0_tesla-model-3.png',
    price: '$35,000',
    description: 'Description for featured item 3.',
  },
  {
    id: 4,
    title: 'BMW 3 Series',
    image: 'https://www.bmw-krishnaautomobiles.in/sites/default/files/2022-04/Mineral-White_0.png',
    price: '$45,000',
    description: 'Description for featured item 4.',
  },
{
    id: 5,
    title: 'Ford Mustang',
    image: 'https://www.vdm.ford.com/content/dam/na/ford/en_us/images/mustang/2025/jellybeans/Ford_Mustang_2025_700A_PG1_88A_89A_13K_COU_64R_67J_990_19X_18Z_91A_17P_44E_MAC_YZTAC_DEFAULT_EXT_4.png',
    price: '$30,000',
    description: 'Description for featured item 5.',
  },
 
{
    id: 6,
    title: 'Mercedes-Benz C-Class',
    image: 'https://pictures.dealer.com/m/mercedesbenzoffortlauderdalemb/1234/bbf6374fb8c34ef18a6a6eac595ef636.png?impolicy=downsize_bkpt&w=380',
    price: '$50,000',
    description: 'Description for featured item 6.',
  },

  {
    id: 7,
    title: 'Hyundai Elantra',
    image: 'https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2024HYC021929368_01_1280_A2B.png',
    price: '$22,000',
    description: 'Description for featured item 7.',
  },

  {
    id: 8,
    title: 'Audi A4',
    image: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f44570f1e3d8e88cb10/stills_0640_png/MY2022/15564/15564_st0640_116.png',
    price: '$40,000',
    description: 'Description for featured item 8.',
  },
];


const Car = () => {
  return (

   <div className="max-w-full mx-auto px-4 py-8 bg-gray-900 w-full">
      <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Our car</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-900 border-spacing-2 border-gray-500 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-white text-sm mt-1">{card.description}</p>
              <p className="text-yellow-400 text-lg font-bold mt-2">{card.price}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                <a href="/login">Book Now</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Car;
