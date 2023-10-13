const resetPassAPI = async (token: string, newPassword: string) => {
  return fetch(`${process.env.REACT_APP_UPDATE_PASSWORD}?token=${token}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: newPassword,
    }),
  });
};

export default resetPassAPI;
