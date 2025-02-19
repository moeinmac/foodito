import { createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    user: [],
    account: [],
    error: [],
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
      const supabase = JSON.parse(localStorage.getItem("supabase.auth.token"))
        .currentSession.user;
      state.account = {
        id: supabase.id,
        email: supabase.email,
        last_login: supabase.last_sign_in_at,
      };
    },
    setError(state, action) {
      state.error = action.payload;
      state.user = [];
      state.isAuth = false;
      if (localStorage.getItem("supabase.auth.token"))
        localStorage.removeItem("supabase.auth.token");
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
        .insert([{ id, name: email.split("@").shift() }]);
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

export const UpdateUser = (id, updatedData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("user")
        .update(updatedData)
        .eq("id", id)
        .select();
      return { data, error };
    };
    try {
      const { data, error } = await fetchData();
      if (data) dispatch(userSlice.actions.setUser(...data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const Signout = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { error } = await supabase.auth.signOut();
      return error;
    };
    const error = await fetchData();
    dispatch(userSlice.actions.setError([]));
  };
};
export const userAction = userSlice.actions;
export default userSlice;
