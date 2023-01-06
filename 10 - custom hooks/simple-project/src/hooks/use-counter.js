import { useEffect, useState } from "react";

const useCounter = (operation) => {
  const [counter, setCounter] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => eval(`${prevCounter} ${operation} 1`));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
