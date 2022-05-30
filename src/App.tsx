import * as React from 'react';
import Homepage from 'Root/pages/Homepage';

import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from 'Root/Layout';
import Page404 from 'Root/pages/Page404';
import GlobalStyles from 'Global/styled/GlobalStyles';

const App: React.FunctionComponent = () => (
  <AppLayout>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search">
        <Route index element={<Homepage />} />
        <Route path=":searchQuery" element={<Homepage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </AppLayout>
);

export default App;
