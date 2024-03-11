import { createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    isChanged: false,
  },
  reducers: {
    setCart(state, action) {
      let tq = 0;
      for (let item of action.payload) {
        tq += item.quantity;
      }
      state.items = action.payload;
      state.totalQuantity = tq;
    },
    addCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: action.payload,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      state.isChanged = true;
    },
    removeCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity--;
      }
      state.isChanged = true;
    },
    deleteCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity -= existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.isChanged = true;
    },
  },
});

export const sendCartData = (cart, userId) => {
  return async () => {
    const sendData = async () => {
      const { data, error } = await supabase
        .from("user")
        .update({ cart })
        .eq("id", userId);
      return { data, error };
    };
    const { data, error } = await sendData();
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
