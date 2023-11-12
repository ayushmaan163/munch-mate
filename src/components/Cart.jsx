import { useSelector } from "react-redux";
import CartFood from "./CartFood";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <h1>Cart - {cartItems.length}</h1>
      {cartItems.map((item) => (
        <CartFood key={item.id} {...item} />
      ))}
      {/* <CartFood {...cartItems[2]} /> */}
    </>
  );
};

export default Cart;
