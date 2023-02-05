import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { meals: mealSlice.reducer, user: userSlice.reducer },
});

export default store;
