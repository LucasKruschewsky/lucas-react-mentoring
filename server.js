import 'core-js';
import express from 'express';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import bodyParser from 'body-parser';
import { ServerStyleSheet } from 'styled-components';
import App from './src/App';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();

  try {
    const content = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      )
    );

    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    const html = `
    <!DOCTYPE html>
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
      </body>
      <script src="client_bundle.js"></script>
    </hmtl>
      `;
    res.send(html);
  } finally {
    sheet.seal();
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
