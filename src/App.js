// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';
// import productsData from '../src/fakeData/products.json';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Products from './components/Products/Products';
// import './index.css';

// productsData = productsData.map((product) => {
//   return {
//     ...product,
//     uid: nanoid(),
//   };
// });

// const getCartDetails = () => {
//   if (!localStorage.getItem('cart')) {
//     return {
//       selectedItems: 0,
//       totalPrice: 0,
//       shippingCharge: 0,
//       taxes: 0,
//       grandTotal: 0,
//     };
//   } else {
//     const products = JSON.parse(localStorage.getItem('cart'));
//     const selectedItems = products.length;
//     const totalPrice = products.reduce((a, c) => a + c.price, 0);
//     const shippingCharge = products.reduce((a, c) => a + c.shipping, 0);
//     const taxes = ((totalPrice + shippingCharge) * 10) / 100;
//     const grandTotal = totalPrice + shippingCharge + taxes;
//     return {
//       selectedItems: selectedItems,
//       totalPrice: totalPrice,
//       shippingCharge: shippingCharge,
//       taxes: taxes,
//       grandTotal: grandTotal,
//     };
//   }
// };

// const getCartProducts = () => {
//   if (!localStorage.getItem('cart')) {
//     return [];
//   } else {
//     return JSON.parse(localStorage.getItem('cart'));
//   }
// };

// const App = () => {
//   const [cartDetails, setCartDetails] = useState(getCartDetails());
//   const [cartProducts, setCartProducts] = useState(getCartProducts());

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartProducts));
//   }, [cartProducts]);

//   const addToCart = (product) => {
//     const { price, shipping } = product;
//     setCartDetails((prevState) => {
//       return {
//         selectedItems: prevState.selectedItems + 1,
//         totalPrice: prevState.totalPrice + price,
//         shippingCharge: prevState.shippingCharge + shipping,
//         taxes:
//           ((prevState.shippingCharge +
//             shipping +
//             prevState.totalPrice +
//             price) /
//             100) *
//           10,
//         grandTotal:
//           prevState.shippingCharge +
//           shipping +
//           prevState.totalPrice +
//           price +
//           prevState.taxes +
//           ((prevState.shippingCharge +
//             shipping +
//             prevState.totalPrice +
//             price) /
//             100) *
//             10,
//       };
//     });
//   };

//   const deleteProductFromCart = (id) => {
//     console.log(id);
//   };

//   const clearCart = () => {
//     setCartDetails({
//       selectedItems: 0,
//       totalPrice: 0,
//       shippingCharge: 0,
//       taxes: 0,
//       grandTotal: 0,
//     });
//     setCartProducts([]);
//   };

//   const addProductsToCart = (product) => {
//     setCartProducts((prevState) => {
//       return [...prevState, product];
//     });
//   };

//   console.log(cartProducts);

//   return (
//     <div className="relative">
//       <Header />
//       <Products
//         productsData={productsData}
//         addToCart={addToCart}
//         cartDetails={cartDetails}
//         clearCart={clearCart}
//         addProductsToCart={addProductsToCart}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default App;

//  <div className="relative">
// <Header />
// <Products
//   productsData={productsData}
//   addToCart={addToCart}
//   cartDetails={cartDetails}
//   clearCart={clearCart}
//   addProductsToCart={addProductsToCart}
// />
// <Footer />
// </div>

//Checkout

// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';
// import productsData from '../src/fakeData/products.json';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Products from './components/Products/Products';
// import './index.css';

// productsData = productsData.map((product) => {
//   return {
//     ...product,
//     uid: nanoid(),
//   };
// });

// const getCartDetails = () => {
//   if (!localStorage.getItem('cart')) {
//     return {
//       selectedItems: 0,
//       totalPrice: 0,
//       shippingCharge: 0,
//       taxes: 0,
//       grandTotal: 0,
//     };
//   } else {
//     const products = JSON.parse(localStorage.getItem('cart'));
//     const selectedItems = products.length;
//     const totalPrice = products.reduce((a, c) => a + c.price, 0);
//     const shippingCharge = products.reduce((a, c) => a + c.shipping, 0);
//     const taxes = ((totalPrice + shippingCharge) * 10) / 100;
//     const grandTotal = totalPrice + shippingCharge + taxes;
//     return {
//       selectedItems: selectedItems,
//       totalPrice: totalPrice,
//       shippingCharge: shippingCharge,
//       taxes: taxes,
//       grandTotal: grandTotal,
//     };
//   }
// };

// const getCartProducts = () => {
//   if (!localStorage.getItem('cart')) {
//     return [];
//   } else {
//     return JSON.parse(localStorage.getItem('cart'));
//   }
// };

// const App = () => {
//   const [cartDetails, setCartDetails] = useState(getCartDetails());
//   const [cartProducts, setCartProducts] = useState(getCartProducts());

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartProducts));
//   }, [cartProducts]);

//   console.log(cartProducts);

//   const deleteProductFromCart = (uid, product) => {
//     console.log(uid, product);
//     setCartProducts((prevState) => {
//       return prevState.filter((product) => {
//         return product.uid !== uid;
//       });
//     });
//     setCartDetails((prevState) => {
//       return {
//         selectedItems: prevState.selectedItems - 1,
//         totalPrice: prevState.totalPrice - product.price,
//         shippingCharge: prevState.shippingCharge - product.shipping,
//         taxes:
//           ((prevState.shippingCharge +
//             product.shipping +
//             prevState.totalPrice +
//             product.price) /
//             100) *
//           10,
//         grandTotal:
//           prevState.shippingCharge +
//           product.shipping +
//           prevState.totalPrice +
//           product.price +
//           prevState.taxes +
//           ((prevState.shippingCharge +
//             product.shipping +
//             prevState.totalPrice +
//             product.price) /
//             100) *
//             10,
//       };
//     });
//   };

//   const clearCart = () => {
//     setCartDetails({
//       selectedItems: 0,
//       totalPrice: 0,
//       shippingCharge: 0,
//       taxes: 0,
//       grandTotal: 0,
//     });
//     setCartProducts([]);
//   };

//   const addProductsToCart = (product) => {
//     setCartProducts((prevState) => {
//       return [...prevState, product];
//     });
//     const { price, shipping } = product;
//     setCartDetails((prevState) => {
//       const selectedItems = prevState.selectedItems + 1;
//       const totalPrice = prevState.totalPrice + price;
//       const shippingCharge = prevState.shippingCharge + shipping;
//       const taxes =
//         ((prevState.shippingCharge + shipping + prevState.totalPrice + price) /
//           100) *
//         10;
//       const grandTotal =
//         prevState.shippingCharge +
//         shipping +
//         prevState.totalPrice +
//         price +
//         prevState.taxes +
//         ((prevState.shippingCharge + shipping + prevState.totalPrice + price) /
//           100) *
//           10;
//       console.log(selectedItems, totalPrice, shippingCharge, taxes, grandTotal);
//       return {
//         selectedItems: selectedItems,
//         totalPrice: totalPrice,
//         shippingCharge: shippingCharge,
//         taxes: taxes,
//         grandTotal: grandTotal,
//       };
//     });
//   };

//   console.log(cartProducts);

//   return (
//     <div className="relative">
//       <Header />
//       <Products
//         productsData={productsData}
//         cartDetails={cartDetails}
//         clearCart={clearCart}
//         addProductsToCart={addProductsToCart}
//         cartProducts={cartProducts}
//         deleteProductFromCart={deleteProductFromCart}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default App;

//All Products

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import './index.css';
import Root from './Layout/Root';
import cartLoader from './Loaders/CartLoaders';
import OrderReviewProducts from './OrderReviewProducts.js/OrderReviewProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Page Not Found!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: () => fetch('products.json'),
      },
      {
        path: '/order-review',
        element: <OrderReviewProducts />,
        loader: cartLoader,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
