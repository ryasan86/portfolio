import React from 'react';

import { DataContext } from '../../providers';
import HeaderContainer from './HeaderStyles';
import NavToggle from '../NavToggle/NavToggle';
import Sidebar from './../Sidebar/Sidebar';

const Header = ({ setSidebarEl }) => (
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
        <Sidebar setSidebarEl={setSidebarEl} />
      </HeaderContainer>
    )}
  </DataContext.Consumer>
);

export default Header;
