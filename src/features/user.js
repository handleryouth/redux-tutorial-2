import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  age: 0,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    login: (state, action) => {
      //change the value that we got from the payload
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

//the slice contains reducer.
export default userSlice.reducer;
