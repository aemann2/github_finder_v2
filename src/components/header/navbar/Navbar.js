import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './css/Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.navHeader}>
          <NavLink className={styles.navlink} to='/'>
            <i className='fab fa-github' />
            Github Finder
          </NavLink>
        </h1>
        <ul className={styles.links}>
          <li className={styles.link}>
            <NavLink className={styles.navlink} to='/'>
              Home
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink className={styles.navlink} to='/about'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
