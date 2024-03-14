import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "edit",
  initialState: {
    Editing: false,
    EditValid: false,
  },
  reducers: {
    toggleEditing(state) {
      state.Editing = !state.Editing;
    },
    toggleEditValid(state){
      state.EditValid = !state.EditValid
    }
  },
});

export default editSlice;
