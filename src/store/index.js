import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    meals: mealSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
