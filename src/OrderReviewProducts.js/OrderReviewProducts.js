import { useLoaderData } from 'react-router-dom';
import OrderReview from '../components/OrderReview/OrderReview';

export default function OrderReviewProducts() {
  const cartProducts = useLoaderData();
  return (
    <section
      id="cards"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-7"
    >
      {cartProducts.map((product) => {
        return (
          <OrderReview
            key={Math.random()}
            product={product}
            deleteProductFromCart={() => {}}
          />
        );
      })}
    </section>
  );
}
