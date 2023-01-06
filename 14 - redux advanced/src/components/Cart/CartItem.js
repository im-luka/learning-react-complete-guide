import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ item }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem({ item }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
