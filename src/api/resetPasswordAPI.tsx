const resetPassAPI = async (id: any, newPassword: any) => {
  const update_password = process.env.REACT_APP_UPDATE_PASSWORD;
  await fetch(`${update_password}${id}`, {
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
