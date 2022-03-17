import {configureStore} from '@reduxjs/toolkit';
import favoriteSlice from './favoriteSlice';

export const store = configureStore({
  reducer: {
    fav: favoriteSlice.reducer
  }
});