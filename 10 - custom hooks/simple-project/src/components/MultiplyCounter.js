import Card from "./Card";
import useCounter from "../hooks/use-counter";

const MultiplyCounter = () => {
  const counter = useCounter("*");

  return <Card>{counter}</Card>;
};

export default MultiplyCounter;
