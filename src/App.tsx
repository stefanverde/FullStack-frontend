import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import router from './Routes';
import { RouterProvider } from 'react-router-dom';
import { Fragment } from 'react';
import BackgroundImage from './components/BackgroundImage';
function App() {
  return (
    <BackgroundImage>
      <Fragment>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Fragment>
    </BackgroundImage>
  );
}

export default App;
