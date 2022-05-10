import * as React from 'react';
import Homepage from '@/pages/Homepage';
import { Provider } from 'react-redux';
import store from '@/store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AppLayout from './Layout';
import Page404 from './pages/Page404';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <Router>
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
    </Router>
  </Provider>
);

export default App;
