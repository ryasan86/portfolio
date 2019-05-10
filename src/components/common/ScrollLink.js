import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { DataContext } from '../../providers';

const Link = ({ children, className, to }) => (
  <DataContext.Consumer>
    {({ menuIsOpen, toggleMenu }) => {
      const delay = 750;
      const duration = () => {
        setTimeout(() => menuIsOpen && toggleMenu(false), delay);
        return delay;
      };

      return (
        <ScrollLink
          className={className}
          to={to}
          spy={true}
          smooth={true}
          duration={duration}>
          {children}
        </ScrollLink>
      );
    }}
  </DataContext.Consumer>
);

export default Link;
