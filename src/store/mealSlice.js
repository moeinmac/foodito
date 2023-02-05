import { createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    meals: [0, 1, 2, 3],
    loading: true,
  },
  reducers: {
    setData(state, action) {
      state.meals = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const fetchMealsData = (value) => {
  return async (dispatch) => {
    const fetchData = async () => {
      if (value === "all") {
        let { data } = await supabase.from("food").select("*");
        return data;
      } else {
        let { data } = await supabase
          .from("food")
          .select("*")
          .eq("type", value);
        return data;
      }
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
