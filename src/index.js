import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./components/redux/db";

// addPost('etetyyey');
export let refreshTree = function () {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store.db.posts}
        addPost={store.addPost.bind(store)}
        arrData={store.db.dialogsData}
        arrMsg={store.db.msgData}
        textareaValue={store.db.textareaValue}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

refreshTree();
