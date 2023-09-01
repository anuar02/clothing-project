import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = (state) => state.cart.isCartOpen;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
