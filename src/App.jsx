import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/home-page";
import AboutPage from "./page/about-page";
import ServicesPage from "./page/services-page";
import CarsPage from "./page/cars-page";
import LoginPagee from "./page/login-page";
const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Homepage/>}></Route>
<Route path="/about" element={<AboutPage/>}></Route>
<Route path="/services" element={<ServicesPage/>}></Route>
<Route path="/cars" element={<CarsPage/>}></Route>
<Route path="/login" element={<LoginPagee/>}></Route>
</Routes>
</BrowserRouter>
  );
};


export default App;