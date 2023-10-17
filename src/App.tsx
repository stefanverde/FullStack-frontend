import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { checkEmailApi } from './api/checkExistingMailAPI';
import router from './Routes';
import { RouterProvider } from 'react-router-dom';
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ApiProvider api={checkEmailApi}>
          <RouterProvider router={router} />
        </ApiProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
