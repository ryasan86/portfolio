import React from 'react';
import { css } from 'styled-components';
import { DOWN_ARROW } from './../../images';
// components
import { Link } from './';
import { Logo } from './';

const ScrollFooterButton = ({ to }) => {
  return (
    <Link linkstyles={linkstyles} to={to}>
      {to} <Logo src={DOWN_ARROW} alt="down" />
    </Link>
  );
};

const linkstyles = css`
  width: 100px;
  background: ${({ theme }) => theme.secondary};
  flex-direction: column;
  &:hover {
    opacity: 0.8;
  }
`;

export { ScrollFooterButton };
