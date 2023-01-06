import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "INCREASE", value: 5 });
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && (
        <div>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 5</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
