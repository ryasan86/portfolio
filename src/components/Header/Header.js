import React from 'react';

import { DataContext } from '../../providers';
import HeaderContainer from './HeaderStyles';
import Sidebar from './../Sidebar/Sidebar';
import NavToggle from '../NavToggle/NavToggle';

const Header = () => (
  <DataContext.Consumer>
    {({ toggleMenu }) => (
      <HeaderContainer>
        <div className="navbar-brand">
          <div className="logo" href="#home">
            <span className="logo-img" />
            Ryan Santos
          </div>
        </div>
        <NavToggle onClick={() => toggleMenu(true)} iconClass="open" />
        <Sidebar />
      </HeaderContainer>
    )}
  </DataContext.Consumer>
);

export default Header;
