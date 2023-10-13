export const updateUser = (userData: any) => {
    return {
      type: 'UPDATE_USER',
      payload: userData,
    };
  };
  
  export const setError = (error: any) => {
    return {
      type: 'SET_ERROR',
      payload: error,
    };
  };

  export const resetFormData = () => {
    return{
      type:'RESET_FORM_DATA',
    }
  }