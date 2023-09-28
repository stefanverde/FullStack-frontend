import React from 'react';
import Login from './routes/Login';
import Home from './routes/Home';
import ForgottenPassword from './routes/ForgottenPassword';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegistrationForm from '../src/components/RegistrationForm';
function PrivateElement({ element }) {
  return localStorage.getItem('authToken') ? (
    React.createElement(element)
  ) : (
    <Login />
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateElement element={Home} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  { path: '/register', element: <RegistrationForm /> },
  {
    path: '/forgottenPassword',
    element: <ForgottenPassword />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
