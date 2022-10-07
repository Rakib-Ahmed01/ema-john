import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsFillCartDashFill } from 'react-icons/bs';

const OrderReview = ({ product, deleteProductFromCart }) => {
  const { img, name, seller, price, ratings, shipping, uid } = product;
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
        className="w-full text-center bg-red-500 py-1 rounded-b absolute bottom-0 flex items-center justify-center gap-1  hover:text-white transition-all duration-300"
        onClick={() => {
          deleteProductFromCart(uid, product);
        }}
      >
        Delete From Cart <BsFillCartDashFill />
      </button>
    </div>
  );
};

export default React.memo(OrderReview);
