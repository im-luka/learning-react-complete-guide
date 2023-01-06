import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, toggleActions } from "./store";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const notification = useSelector((state) => state.toggle.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        toggleActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data...",
        })
      );

      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        dispatch(
          toggleActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }

      dispatch(
        toggleActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully...",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) =>
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
