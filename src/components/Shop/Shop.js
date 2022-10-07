import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const getCartDetails = () => {
  if (!localStorage.getItem('cart')) {
    return {
      selectedItems: 0,
      totalPrice: 0,
      shippingCharge: 0,
      taxes: 0,
      grandTotal: 0,
    };
  } else {
    const products = JSON.parse(localStorage.getItem('cart'));
    const selectedItems = products.length;
    const totalPrice = products.reduce((a, c) => a + c.price, 0);
    const shippingCharge = products.reduce((a, c) => a + c.shipping, 0);
    const taxes = ((totalPrice + shippingCharge) * 10) / 100;
    const grandTotal = totalPrice + shippingCharge + taxes;
    return {
      selectedItems: selectedItems,
      totalPrice: totalPrice,
      shippingCharge: shippingCharge,
      taxes: taxes,
      grandTotal: grandTotal,
    };
  }
};

const getCartProducts = () => {
  if (!localStorage.getItem('cart')) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('cart'));
  }
};

const Shop = () => {
  const products = useLoaderData();
  const [cartDetails, setCartDetails] = useState(getCartDetails());
  const [cartProducts, setCartProducts] = useState(getCartProducts());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product) => {
    const { price, shipping } = product;
    setCartDetails((prevState) => {
      return {
        selectedItems: prevState.selectedItems + 1,
        totalPrice: prevState.totalPrice + price,
        shippingCharge: prevState.shippingCharge + shipping,
        taxes:
          ((prevState.shippingCharge +
            shipping +
            prevState.totalPrice +
            price) /
            100) *
          10,
        grandTotal:
          prevState.shippingCharge +
          shipping +
          prevState.totalPrice +
          price +
          prevState.taxes +
          ((prevState.shippingCharge +
            shipping +
            prevState.totalPrice +
            price) /
            100) *
            10,
      };
    });
  };

  const deleteProductFromCart = (id) => {
    console.log(id);
  };

  const clearCart = () => {
    setCartDetails({
      selectedItems: 0,
      totalPrice: 0,
      shippingCharge: 0,
      taxes: 0,
      grandTotal: 0,
    });
    setCartProducts([]);
  };

  const addProductsToCart = (product) => {
    setCartProducts((prevState) => {
      return [...prevState, product];
    });
  };

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

export default Shop;
