import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "edit",
  initialState: {
    Editing: false,
    EditingPhone : false,
    PhoneValid: false,
    PhoneValue : ""
  },
  reducers: {
    setEditing(state) {
      state.Editing = true;
    },
    setPhoneValid(state,action){
      state.PhoneValid = true
      state.PhoneValue = action.payload
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
