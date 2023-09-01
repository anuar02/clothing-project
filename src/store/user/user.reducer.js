import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  userCartOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setUserCartOpen(state, action) {
      state.userCartOpen = action.payload;
    },
  },
});

export const { setCurrentUser, setUserCartOpen } = userSlice.actions;

export const userReducer = userSlice.reducer;
