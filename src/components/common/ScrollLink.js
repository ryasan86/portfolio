import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { DataContext } from '../../providers';

const Link = ({ children, className, to }) => (
  <DataContext.Consumer>
    {({ menuIsOpen, toggleMenu }) => {
      const ms = 750;
      const duration = () => {
        setTimeout(() => menuIsOpen && toggleMenu(false), ms);
        return ms;
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
