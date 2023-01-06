import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setisCartShown] = useState(false);

  const showCartHandler = () => {
    setisCartShown(true);
  };
  const hideCartHandler = () => {
    setisCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
