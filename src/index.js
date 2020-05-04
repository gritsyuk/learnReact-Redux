import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Db from './components/redux/db';
import {addPost} from './components/redux/db';

// addPost('etetyyey');
export let refreshTree = function () {
ReactDOM.render(
  <React.StrictMode>
    <App posts = {Db.posts} addPost = {addPost} arrData = {Db.dialogsData} arrMsg = {Db.msgData} textareaValue={Db.textareaValue}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
}

refreshTree();
