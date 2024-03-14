import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "edit",
  initialState: {
    Editing: false,
    EditValid: false,
    EditingPhone : false,
  },
  reducers: {
    setEditing(state) {
      state.Editing = true;
    },
    toggleEditValid(state){
      state.EditValid = !state.EditValid
    },
    setEditPhone(state){
      state.EditingPhone =true
    },
    discardEdit(state){
      state.Editing = false
      state.EditingPhone = false
    }
  },
});

export default editSlice;
