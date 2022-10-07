// import Cart from '../Cart/Cart';

export default function Products() {
  return (
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
  );
}
