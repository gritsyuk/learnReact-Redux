import React, { Profiler } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile';
import {BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Center/Dialogs/Dialogs';


function App(props) {
  return (
    <BrowserRouter>
    <div className = "app-wrapper"> 
    <Nav/>
    <section className="page-content">  
      <Header />
      <Route path = '/start' render = { () => <Profile textareaValue = {props.textareaValue} posts = {props.posts} addPost={props.addPost} />} />
      <Route path = '/dialogs' render = { ()=> <Dialogs arrData = {props.arrData} arrMsg = {props.arrMsg}/>} />
     </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
