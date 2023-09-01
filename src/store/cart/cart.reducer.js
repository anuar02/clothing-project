import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, decrementCartItem, removeCartItem } from "./cart.action";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    decrementItem(state, action) {
      state.cartItems = decrementCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
  },
});

export const cartReducer = CartSlice.reducer;

export const {
  setIsCartOpen,
  decrementItem,
  removeItemFromCart,
  addItemToCart,
} = CartSlice.actions;
