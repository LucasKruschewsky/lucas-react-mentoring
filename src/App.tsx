import * as React from 'react';
import Homepage from 'Root/pages/Homepage';
import { Provider } from 'react-redux';
import store from 'Root/store';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from 'Root/Layout';
import Page404 from 'Root/pages/Page404';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search">
          <Route index element={<Homepage />} />
          <Route path=":searchQuery" element={<Homepage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AppLayout>
  </Provider>
);

export default App;
