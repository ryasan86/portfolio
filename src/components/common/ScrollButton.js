import React from 'react';
import { css } from 'styled-components';
// components
import { Link } from './';
import { Logo } from './';

const ScrollBtn = ({ to, label, icon, styles }) => {
  return (
    <Link linkstyles={styles || linkstyles} to={to}>
      {label} <Logo src={icon} alt="arrow" />
    </Link>
  );
};

const linkstyles = css`
  width: 100px;
  background: ${({ theme }) => theme.secondary};
  flex-direction: column;
  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;

export { ScrollBtn };
