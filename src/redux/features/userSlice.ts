import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    formData: {
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
      email: '',
    },
    error: '',
  },
  reducers: {
    updateUser: (state, action: PayloadAction<any>) => {
      console.log('updateUser',action.payload);
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
