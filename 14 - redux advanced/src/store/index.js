import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialStateToggle = {
  isCartVisible: true,
  notification: null,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialStateToggle,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const toggleActions = toggleSlice.actions;

const initialStateCart = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addItem(state, action) {
      const item = {
        ...action.payload.item,
        quantity: 1,
        totalPrice: action.payload.item.price,
      };
      const index = state.cart.findIndex((itm) => itm.id === item.id);
      if (index === -1) {
        state.cart = [...state.cart, item];
      } else {
        state.cart[index] = {
          ...state.cart[index],
          totalPrice: state.cart[index].totalPrice + item.price,
          quantity: state.cart[index].quantity + 1,
        };
      }
    },
    removeItem(state, action) {
      const item = { ...action.payload.item };
      if (item.quantity === 1) {
        state.cart = state.cart.filter((itm) => itm.id !== item.id);
      } else {
        const index = state.cart.findIndex((itm) => itm.id === item.id);
        state.cart[index].quantity = item.quantity - 1;
        state.cart[index].totalPrice = item.totalPrice - item.price;
      }
    },
    replaceCart(state, action) {
      state.cart = [...action.payload.cart];
    },
  },
});

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}cart.json`);

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({ cart: [...cartData] }));
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
