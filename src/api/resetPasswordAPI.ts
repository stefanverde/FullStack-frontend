const resetPassAPI = async (id: any, newPassword: any) => {
  const update_password = process.env.REACT_APP_UPDATE_PASSWORD;
  const token = localStorage.getItem("token");
  const response = await fetch(`${update_password}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      password: newPassword,
    }),
  });

  if(!response.ok){
      throw new Error("failed to reset password");
  }

  const data = await response.json();
  return data.token;
};

export default resetPassAPI;
