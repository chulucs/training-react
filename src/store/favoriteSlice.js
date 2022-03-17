import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addElement: (state, action) => {
      console.log(action.payload.title);
      const found = state.favorites.find(favorite => favorite.title === action.payload.title);
      // console.log(found);
      if (!found) {
        state.favorites.push(action.payload);
      } else {
        return;
      }
      
    },
    removeElement: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.title !== action.payload);
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
