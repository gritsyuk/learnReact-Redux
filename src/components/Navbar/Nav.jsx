import React from 'react';
import  s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <header className={s['page-header']}> 
        <nav>
            <a href="/">
            <img className={s.logo} src="https://putevi-l.ru/wp-content/uploads/2018/04/Logo-jpg.jpg" width = "50 px" height = "50 px" alt="forecastr logo"/>
            </a>
        <ul className={s['admin-menu']}>
            <li className={s['menu-heading']}>
                <h3>Главная</h3>
            </li>
            <li>
                <NavLink to="/start"><span>Pages</span></NavLink>
            </li>
            <li>
            <NavLink to="/dialogs"><span>Dialogs</span></NavLink>
            </li>
            <li>
                <a href="#0">
                    <span>Trends</span>
                </a>
            </li>
            <li>
                <a href="#0">
                <span>Collection</span>
                </a>
            </li>
            <li>
                <a href="#0">
                <span>Comments</span>
                </a>
            </li>
            <li>
                <a href="#0">
                <span>Appearance</span>
                </a>
            </li>
            <li className={s['menu-heading']}>
                <h3>Настройки</h3>
            </li>
            <li>
                <a href="#0">
                <span>Settings</span>
                </a>
            </li>
            <li>
                <a href="#0">
                <span>Options</span>
                </a>
            </li>
            <li>
                <a href="#0">
                 <span>Charts</span>
                </a>
            </li>
            <li>
                <button className={s['collapse-btn']} ariaExpanded="true" ariaLabel="collapse menu">
                <svg ariaHidden="true">
                    <use xlinkHref="#collapse"></use>
                </svg>
                <span>{'<< Скрыть панель'}</span>
                </button>
            </li>
        </ul>
  </nav>
</header>
      );
  }
  export default Nav;