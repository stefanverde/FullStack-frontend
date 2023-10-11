import { useEffect, useState } from 'react';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
const UserDetails = async () => {
  const [userDetails, setUserDetails] = useState<User | null>(null);

  const fetchUserDetails = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        return;
      }
      const tokenPayload = JSON.parse(atob(authToken.split('.')[1]));
      const userId = tokenPayload.id;
      const response = await fetch(
        `http://localhost:3001/v1/users/details/${userId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserDetails(data);
      } else {
        console.error('Error fetching user details');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  
};
export default UserDetails;
