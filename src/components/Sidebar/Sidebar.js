import React from 'react';

import { DataContext } from '../../providers';
import SidebarContainer from './SidebarStyles';
import Link from './../common/ScrollLink';
import NavToggle from '../NavToggle/NavToggle';

const Sidebar = () => {
  return (
    <DataContext.Consumer>
      {({ menuIsOpen, toggleMenu }) => (
        <SidebarContainer menuIsOpen={menuIsOpen} id="sidebar">
            <div>
              <h4>Navigation</h4>
              <NavToggle iconClass="close" onClick={() => toggleMenu(false)} />
            </div>
            <ul>
              <li><Link to="home"><span>01</span>Home</Link></li>
              <li><Link to="about"><span>02</span>About</Link></li>
              <li><Link to="projects"><span>03</span>Projects</Link></li>
              <li><Link to="contact"><span>04</span>Contact</Link></li>
            </ul>
        </SidebarContainer>
      )}
    </DataContext.Consumer>
  );
};

export default Sidebar;
