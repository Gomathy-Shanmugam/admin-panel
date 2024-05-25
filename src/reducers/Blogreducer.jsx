import { createSlice } from "@reduxjs/toolkit";

export const blogslice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
  },
  reducers: {
    addblog: (state, action) => {
      state.blogs = [...state.blogs,action.payload];
    return state;
    },
  },
});

export const {addblog} = blogslice.actions