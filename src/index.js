import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./components/redux/store-redux";
import {Provider} from 'react-redux';

let refreshTree =  (state) => {debugger;
  ReactDOM.render(
    <React.StrictMode>
      <Provider store = {store}><App /></Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  let st = store.getState();
  refreshTree(st);
  store.subscribe(()=>{refreshTree(st);});
