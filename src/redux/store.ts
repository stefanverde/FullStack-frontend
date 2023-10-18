import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import { checkEmailApi } from '../api/checkExistingMailAPI';

const rootReducer = combineReducers({
  user: userReducer,
  [checkEmailApi.reducerPath]: checkEmailApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkEmailApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;