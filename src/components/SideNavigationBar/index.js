import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LMlogo from '../../assets/vectors/LM-logo.png';
import { navItemsList } from './configs/NavigationList';

import './style.css';

const SideNavigationBar = props => {
  const { activeLink, handleLinkClick } = props;
  const location = useLocation();

  useEffect(() => {
    if (location !== activeLink) {
      handleLinkClick(`/${location.pathname.split('/')[1]}`);
    }
  }, []);

  const getListItem = item => {
    const itemClassName =
      activeLink === item.path ? 'icon-xxl white' : 'lightgrey icon-xxl';
    return (
      <li
        key={item.id}
        className={`nav ${activeLink === item.path && 'active'}`}
      >
        <Link
          to={item.path}
          id={item.id}
          onClick={() => handleLinkClick(item.path)}
        >
          {item.icon(itemClassName)}
        </Link>
      </li>
    );
  };

  const navItems = [];
  const navItems1 = [];
  navItemsList.map(item => {
    if (item.id < 7) {
      navItems.push(getListItem(item));
    } else {
      navItems1.push(getListItem(item));
    }
  });

  return (
    <div className='sidebar'>
      <div className='h-75'>
        <img src={LMlogo} alt='Brand Logo' className='brand-logo' />
        <nav className='navigation h-70'>
          <ul className='navs-list'>{navItems}</ul>
        </nav>
      </div>
      <nav className='navigation h-25'>
        <ul className='navs-list'>{navItems1}</ul>
      </nav>
    </div>
  );
};

export default SideNavigationBar;
