import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    changeColor: (state, action) => {
      //change the value that we got from the payload
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

//the slice contains reducer.
export default themeSlice.reducer;
