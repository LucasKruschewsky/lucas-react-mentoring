import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'Root/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'Root/store';
import 'react-toastify/dist/ReactToastify.css';

export const store = createStore(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
