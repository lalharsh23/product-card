import React from 'react';

const ProductCard = ({ imageUrl, title, description, price, onClick }) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center group-hover:opacity-80 transition duration-300 ease-in-out"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300 ease-in-out"></div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        
        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
        
        {/* Price */}
        <p className="mt-4 text-xl font-bold text-gray-900">{price}</p>

        {/* Button */}
        <button
          onClick={onClick}
          className="mt-4 w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
