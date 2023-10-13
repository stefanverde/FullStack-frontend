import fetchRequest from './fetchRequestAPI';

const addUserAPI = async (formData: {
  [x: string]: any;
  repeatPassword: any;
}) => {
  const { repeatPassword, ...requestData } = formData;

  await fetchRequest(`${process.env.REACT_APP_ADD_USER}`, {
    method: 'POST',
    body: JSON.stringify(requestData),
  });
};

export default addUserAPI;
