import React from "react";
import Layout from "../Component/Layout/Layout.jsx";
import OurMission from "../component/our-misson/our-misson.jsx";
import Hero from "../component/hero/hero.jsx";
import Brands from "../component/cart/brands.jsx";
import FeaturedCard from "../component/featured/featurad-card.jsx";
import WhyChoose from "../component/hero/why-choose.jsx";
import Card from "../component/cart/cart.jsx";
const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCard />
      <Brands />
      
      <Card /> 
      <WhyChoose />
      {/* <Cart /> */}
      <OurMission />
    </Layout>
  );
}
export default HomePage;