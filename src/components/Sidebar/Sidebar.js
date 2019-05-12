import React from 'react';

import { DataContext } from '../../providers';
import SidebarContainer from './SidebarStyles';
import Link from './../common/ScrollLink';
import NavToggle from '../NavToggle/NavToggle';

const Sidebar = ({ setSidebarEl }) => (
  <DataContext.Consumer>
    {({ menuIsOpen, toggleMenu }) => (
      <SidebarContainer menuIsOpen={menuIsOpen} id="sidebar" ref={el => setSidebarEl(el)}>
          <div>
            <h4>Navigation</h4>
            <NavToggle iconClass="close" onClick={() => toggleMenu(false)} />
          </div>
          <ul>
            <li><Link to="home"><span>01</span>Home</Link></li>
            <li><Link to="about"><span>02</span>About</Link></li>
            <li><Link to="projects"><span>03</span>Projects</Link></li>
            <li><Link to="skills"><span>05</span>Skills</Link></li>
            <li><Link to="contact"><span>06</span>Contact</Link></li>
          </ul>
      </SidebarContainer>
    )}
  </DataContext.Consumer>
);

export default Sidebar;
