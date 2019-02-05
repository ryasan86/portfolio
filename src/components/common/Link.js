import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { flexCenter } from './../../utils/flexCenter';

const Link = ({ to, children, activeClass, linkstyles }) => {
  return (
    <StyledLink
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      activeClass={activeClass}
      linkstyles={linkstyles}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(ScrollLink)`
  ${flexCenter}
  color: ${({ theme }) => theme.light};
  cursor: pointer;
  height: 100%;
  ${({ linkstyles }) => linkstyles}
`;

export { Link };
