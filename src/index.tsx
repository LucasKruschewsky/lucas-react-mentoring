import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'Root/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'Root/reset.css';
import 'Root/index.css';

ReactDOM.hydrate(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
