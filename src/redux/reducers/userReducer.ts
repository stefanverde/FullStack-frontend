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

const userReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, formData: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_FORM_DATA':
      return {
        ...state,
        formData: {
          firstName: '',
          lastName: '',
          password: '',
          repeatPassword: '',
          email: '',
        },
      };
    default:
      return state;
  }
};

export default userReducer;
