import React from "react";

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-white px-6 py-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    
    <div className="text-2xl font-bold">MyCars</div>

    
    <div className="flex flex-col md:flex-row gap-4 text-sm">
       <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/services" className="hover:text-gray-300">Services</a>
            <a href="/cars" className="hover:text-gray-300">Cars</a>
            <a href="/login" className="hover:text-gray-300">Login</a>

    </div>

    
    <div className="flex gap-4">
      <a href="#" className="hover:text-gray-300">Facebook</a>
      <a href="#" className="hover:text-gray-300">Twitter</a>
      <a href="#" className="hover:text-gray-300">Instagram</a>
    </div>
  </div>

  <div className="mt-6 text-center text-xs text-gray-400">
    &copy; 2025 MyBrand. All rights reserved.
  </div>
</footer>
  );
}

export default Footer;