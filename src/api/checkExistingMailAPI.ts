const checkExistingMail = (formData: { email: any; }) => {
    
    return fetch(
        `${process.env.REACT_APP_CHECK_EXISTING_EMAIL}${formData.email}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

}

export default checkExistingMail;