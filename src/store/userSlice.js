import { createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    user: [],
    error: [],
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem("user", JSON.stringify(action.payload.id));
    },
    setError(state, action) {
      state.error = action.payload;
      state.isAuth = false;
      if (localStorage.getItem("user")) localStorage.removeItem("user");
    },
    signOutUser(state) {
      state.user = [];
      state.isAuth = false;
      localStorage.removeItem("user");
    },
  },
});

export const fetchUserData = (user_id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("user")
        .select("*")
        .eq("id", user_id);
      return { data, error };
    };
    try {
      const { data, error } = await fetchData();
      if (data) dispatch(userSlice.actions.setUser(...data));
      else dispatch(userSlice.actions.setError(error));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signInUser = (email, password) => {
  return async (dispatch) => {
    const fetchData = async () => {
      let { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      return { user, error };
    };
    const { user, error } = await fetchData();
    if (user) dispatch(fetchUserData(user.id));
    else dispatch(userSlice.actions.setError(error));
  };
};

const createUser = (id, email) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { error, data } = await supabase
        .from("user")
        .insert([{ id, email, name: email.split("@").shift() }]);
      return { error, data };
    };
    try {
      const { error, data } = await fetchData();
      if (data) dispatch(userSlice.actions.setUser(...data));
      else dispatch(userSlice.actions.setError(error));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpUser = (email, password) => {
  return async (dispatch) => {
    const fetchData = async () => {
      let { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      return { user, error };
    };
    try {
      const { user, error } = await fetchData();
      if (user) dispatch(createUser(user.id, user.email));
      else dispatch(userSlice.actions.setError(error));
    } catch (error) {
      console.log(error);
    }
  };
};

export const userAction = userSlice.actions;
export default userSlice;
