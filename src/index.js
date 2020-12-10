import React from "react"; //react library
import ReactDOM from "react-dom"; // react DOM.

import App from "./App"; //import from app.js

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

//Points to note:
//1. Index.js is the javascript file of index.html which is the main file.
//2. Index.js contains the root element that is the main div inside index.html.
//3. whatever we add in app.js gets added in index.js because we have rendered it to app.js.
