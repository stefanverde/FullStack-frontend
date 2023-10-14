import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import ForgotPassword from './components/ForgotPassword';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import ResetPassword from './components/ResetPassword';

interface PrivateElementProps {
  element: React.ComponentType;
}

function PrivateElement({ element: Element }: PrivateElementProps) {
  return localStorage.getItem('authToken') ? <Element /> : <Login />;
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
    path: '/forgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/resetPassword',
    element: <ResetPassword />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
