import Express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './client/redux/configureStore';
import App from './client/component/app';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

const app = Express()
const port = 3001

//Serve static files
app.use(Express.static('build/public'));

// This is fired every time the server side receives a request
app.get('*', handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    // Create a new Redux store instance
    const store = configureStore({});
    // Render the component to a string
    const sheet = new ServerStyleSheet();
    const html = renderToString(sheet.collectStyles( <Provider store={store}><App/></Provider>));
    const styles = sheet.getStyleTags();
    // Grab the initial state from our Redux store
    const preloadedState = store.getState()
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html,styles, preloadedState))
  }
function renderFullPage(html,styles, preloadedState) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Characters of Rick And Morty Show</title>
        ${styles}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="client_bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
console.log(`Serving at http://localhost:${port}`);