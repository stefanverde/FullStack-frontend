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
  
  const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...state, formData: action.payload };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  