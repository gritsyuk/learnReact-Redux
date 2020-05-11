import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Center/Dialogs/DialogsContainer";
import UsersContainer from './components/Center/Users/UsersContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Nav />
        <section className='page-content'>
          <Header />
          <Route path='/start' render={() => (<Profile /> )} />
          <Route path='/dialogs' render={() => (<DialogsContainer />  )}  />
          <Route path='/users' render={() => (<UsersContainer />  )} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
