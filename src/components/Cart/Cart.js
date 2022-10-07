// const Cart = ({ cartDetails, clearCart }) => {
//   console.log(cartDetails);
//   return <div className=""></div>;
// };

// export default Cart;

import { AiFillDelete } from 'react-icons/ai';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Cart = ({ cartDetails, clearCart }) => {
  const { selectedItems, totalPrice, shippingCharge, taxes, grandTotal } =
    cartDetails;
  console.log(cartDetails);
  return (
    <div className="">
      <h2 className=" text-center text-xl">Order Summary</h2>
      <div id="cart-details" className="p-2">
        <h3>Selected Items: {selectedItems}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <h3>Shipping Charge: ${shippingCharge}</h3>
        <h3>Taxes: ${taxes.toFixed(2)}</h3>
        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
      <div className="flex flex-col mx-2 space-y-2">
        <button
          className="bg-red-500 py-1 rounded flex justify-center items-center gap-1  hover:text-white transition-all duration-300"
          onClick={clearCart}
        >
          Clear Cart <AiFillDelete />
        </button>
        <button className="bg-orange-400 py-1 rounded flex justify-center items-center gap-1 hover:bg-orange-400 hover:text-white transition-all duration-300">
          Checkout <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default Cart;
