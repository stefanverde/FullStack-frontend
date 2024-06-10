import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import RegistrationForm from './components/RegistrationForm';
import ResetPassword from './components/ResetPassword';
import Home from './pages/Home';
import Femei from './pages/magazin/Femei';
import Barbati from './pages/magazin/Barbati';
import DrumetieHiking from './pages/magazin/DrumetieHiking';
import SportIarna from './pages/magazin/SportIarna';
import Incaltaminte from './pages/magazin/Incaltaminte';
import Imbracaminte from './pages/magazin/Imbracaminte';
import Pescuit from './pages/magazin/Pescuit';
import Contact from './pages/Contact';
import DrumetieHikingF from './pages/magazin/DrumetieHikingF';

interface PrivateElementProps {
  element: React.ComponentType;
}

function PrivateElement({ element: Element }: PrivateElementProps) {
  return localStorage.getItem('authToken') ? <Element /> : <Home />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateElement element={Home} />,
  },
  {
    path: '/dashboard',
    element: <PrivateElement element={Dashboard} />,
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
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/resetPassword',
    element: <PrivateElement element={ResetPassword} />,
  },
  {
    path: '/magazinFemei',
    element: <Femei />,
    children: [
      {
        path: '/magazinFemei/drumetieHiking',
        element: <DrumetieHiking />,
      },
      {
        path: '/magazinFemei/incaltaminte',
        element: <Incaltaminte />,
      },
      {
        path: '/magazinFemei/imbracaminte',
        element: <Imbracaminte />,
      },
      {
        path: '/magazinFemei/iarna',
        element: <SportIarna />,
      },
    ],
  },
  {
    path: '/magazinBarbati',
    element: <Barbati />,
    children: [
      {
        path: '/magazinBarbati/pescuit',
        element: <Pescuit />,
      },
      {
        path: '/magazinBarbati/drumetieHiking',
        element: <DrumetieHiking />,
      },
      {
        path: '/magazinBarbati/incaltaminte',
        element: <Incaltaminte />,
      },
      {
        path: '/magazinBarbati/imbracaminte',
        element: <Imbracaminte />,
      },
    ],
  },
]);

export default router;
