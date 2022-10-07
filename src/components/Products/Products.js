import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = ({
  products,
  cartDetails,
  clearCart,
  addProductsToCart,
  cartProducts,
  deleteProductFromCart,
}) => {
  return (
    <main className="flex">
      <section
        id="cards"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-7"
      >
        {products.map((product) => {
          return (
            <Product
              key={Math.random()}
              product={product}
              cartDetails={cartDetails}
              clearCart={clearCart}
              addProductsToCart={addProductsToCart}
            />
          );
        })}
      </section>
      <section className="bg-orange-300 h-screen w-[600px] sticky top-0">
        <Cart cartDetails={cartDetails} clearCart={clearCart} />
      </section>
    </main>
  );
};

export default Products;

//Checkout/Order Review

// import Cart from '../Cart/Cart';
// import OrderReview from '../OrderReview/OrderReview';

// const Products = ({
//   productsData,
//   addToCart,
//   cartDetails,
//   clearCart,
//   addProductsToCart,
//   cartProducts,
//   deleteProductFromCart,
// }) => {
//   return (
//     <main className="flex justify-between">
//       <section
//         id="cards"
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-7 justify-between"
//       >
//         {cartProducts.map((product) => {
//           return (
//             <OrderReview
//               key={Math.random()}
//               product={product}
//               deleteProductFromCart={deleteProductFromCart}
//             />
//           );
//         })}
//       </section>
//       <section className="bg-orange-300 w-[550px] h-screen sticky top-0">
//         <Cart cartDetails={cartDetails} clearCart={clearCart} />
//       </section>
//     </main>
//   );
// };

// export default Products;

//All
