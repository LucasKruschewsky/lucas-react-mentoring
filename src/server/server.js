import 'core-js';
import express from 'express';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import bodyParser from 'body-parser';
import { ServerStyleSheet } from 'styled-components';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import serialize from 'serialize-javascript';
import { matchPath } from 'react-router-dom';
import { routes } from './routes';
import { createStore } from '../store/index';
import App from '../App';
import 'isomorphic-fetch';

dotenv.config();
const { PORT } = process.env || 3000;

const app = express();

// Redirects to /search route
app.get('/', (req, res) => {
  res.redirect(301, '/search');
});

app.use(express.static('build/public'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  const activeRoute = routes.find((route) => matchPath(route, req.url));

  const promise = activeRoute?.fetchInitialData
    ? activeRoute.fetchInitialData(req.url)
    : Promise.resolve();

  promise.then((initialMovies) => {
    const sheet = new ServerStyleSheet();
    try {
      // Store with initial state
      const store = createStore({
        selectedMovie: null,
        currentModal: {
          modalType: null,
          movieId: null,
        },
        movieList: {
          list: initialMovies?.data,
          numberOfMoviesFound: initialMovies?.totalAmount,
          status: null,
        },
      });

      const content = ReactDOMServer.renderToString(
        sheet.collectStyles(
          <Provider store={store}>
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        )
      );

      const styleTags = sheet.getStyleTags();
      const preloadedState = store.getState();

      const html = `
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>React Mentoring</title>
            ${styleTags}
          </head>
          <body>
            <div id="app-modal" />
            <div id="root">${content}</div>
            <script src="../client_bundle.js"></script>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
            </script>
          </body>
        </hmtl>
          `;

      res.send(`<!DOCTYPE html> ${html}`);
    } finally {
      sheet.seal();
    }
  });
});

app.listen(PORT);
