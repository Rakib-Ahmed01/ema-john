import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';

const Product = ({ product, addProductsToCart }) => {
  const { img, name, seller, price, ratings, shipping } = product;
  return (
    <div id="card" className="border rounded relative">
      <div className="p-1">
        <img src={img} alt="" className="rounded-sm" />
      </div>
      <div className="p-1 mb-8">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h3>
          Price: <span className="text-orange-500">${price}</span>
        </h3>
        <h3>Manufacturer: {seller}</h3>
        <h4 className="flex items-center">
          Ratings: {ratings} <AiTwotoneStar color="orange" />
        </h4>
        <h4>
          Shipping Charge: <span className="text-orange-500">${shipping}</span>
        </h4>
      </div>
      <button
        className="w-full text-center bg-orange-300 py-1 rounded-b absolute bottom-0 flex items-center justify-center gap-1 hover:bg-orange-400 hover:text-white transition-all duration-300"
        onClick={() => {
          addProductsToCart(product);
        }}
      >
        Add To Cart <FaCartPlus></FaCartPlus>
      </button>
    </div>
  );
};

export default React.memo(Product);
