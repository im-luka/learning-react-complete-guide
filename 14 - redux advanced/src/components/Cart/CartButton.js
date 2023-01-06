import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store";

const CartButton = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggleActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
