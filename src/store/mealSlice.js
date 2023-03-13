import { createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    meals: [0, 1, 2, 3],
    loading: true,
    filterValue: "all",
  },
  reducers: {
    setData(state, action) {
      state.meals = action.payload;
    },
    setFilter(state, action) {
      state.filterValue = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const fetchMealsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      let { data } = await supabase.from("food").select("*");
      return data;
    };
    try {
      const mealsData = await fetchData();
      dispatch(mealSlice.actions.setData(mealsData));
      dispatch(mealSlice.actions.toggleLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const mealAction = mealSlice.actions;
export default mealSlice;
