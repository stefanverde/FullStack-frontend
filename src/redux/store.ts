import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import { userApi } from '../api/userAPI';
import { mailApi } from '../api/mailAPI';
import { authApi } from '../api/authAPI';

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [mailApi.reducerPath]: mailApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      mailApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
