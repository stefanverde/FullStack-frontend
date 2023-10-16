import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
  },
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<any>) => {
      state.formData = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    resetFormData: (state) => {
      state.formData = {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        email: '',
      };
    },
  },
});

export const { updateUser, setError, resetFormData } = userSlice.actions;
export default userSlice.reducer;
