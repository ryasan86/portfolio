import React from 'react';
import styled, { css } from 'styled-components';
import { SECTIONS as NavLinks } from './../constants';
// components
import { Link } from './common';

const Header = () => (
  <StyledHeader data-aos="slide-right">
    <NavList>
      {NavLinks.map(({ section }, i) => (
        <Link key={i} to={section} activeClass="active" linkstyles={linkstyles}>
          {section}
        </Link>
      ))}
    </NavList>
  </StyledHeader>
);

const linkstyles = css`
  width: 150px;
  transition: box-shadow 0.1s linear, color 0.1s linear;
  &.active {
    box-shadow: 0 -5px 0 0 ${({ theme }) => theme.color.primary} inset;
    color: ${({ theme }) => theme.color.primary};
  }
`;

const NavList = styled.ul`
  height: 100%;
  height: 50px;
  margin: 0 0;
  border: ${({ theme }) => theme.color.dark} 3px solid;
  display: flex;
`;

const StyledHeader = styled.div`
  z-index: 1;
  background: ${({ theme }) => theme.color.dark};
  width: 100%;
  height: 50px;
  padding: 1%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  border-bottom: 2px solid ${({ theme }) => theme.color.dark};
`;

export default Header;
