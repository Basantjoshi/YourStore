import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 sm:px-10 lg:px-24">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p>
            Welcome to <strong>YourStore</strong> - your go-to destination for high-quality home and office appliances.
            Whether you're designing a cozy bedroom, a functional office, a stylish living room, or a welcoming dining area, 
            we have everything you need to bring your space to life.
          </p>
          <p>
            Since our launch, we've been committed to helping customers create comfort and elegance in every corner of their home and workspaces. 
            From sleek furniture and lighting to modern décor and must-have appliances, we carefully select every item to ensure both function and style.
          </p>
          <p>
            At YourStore, we believe your space should reflect your personality and support your lifestyle. 
            That's why we combine great design with durability and value.
          </p>
          <p className="font-semibold">Thanks for making us part of your home,<br />The YourStore Team</p>
        </div>
          
          <img
            src="https://www.dhl.com/discover/content/dam/usa/5-about-dhl/reports-and-press/2024%20ecommerce%20survey%20US%20results.webp"
            alt="YourStore"
            className="rounded-xl shadow-md w-full object-cover h-full"
          />
        </div>
      </div>
      </div>

  );
};

export default AboutUs;
