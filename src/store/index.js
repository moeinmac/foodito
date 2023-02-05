import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice";

const store = configureStore({
  reducer: { meals: mealSlice.reducer },
});

export default store;
