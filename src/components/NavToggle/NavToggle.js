import React from 'react';

import NavToggleContainer from './NavToggleStyles';

const NavToggle = ({ onClick, iconClass }) => (
  <NavToggleContainer onClick={onClick}>
    <i className={iconClass} />
  </NavToggleContainer>
);

export default NavToggle;
