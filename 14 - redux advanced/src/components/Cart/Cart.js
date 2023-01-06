import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const isCartVisible = useSelector((state) => state.toggle.isCartVisible);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {isCartVisible && (
        <ul>
          {cart.length === 0 && <p>No items in a Cart! Start adding some.</p>}
          {cart.length !== 0 &&
            cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
