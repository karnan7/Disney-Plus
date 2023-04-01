import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import movieReducer from '../features/Movie/movieSlice';

export const store = configureStore({
  reducer:{
    user: userReducer,
    movie: movieReducer,
  }
});
