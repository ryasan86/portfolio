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
    box-shadow: 0 -5px 0 0 ${({ theme }) => theme.primary} inset;
    color: ${({ theme }) => theme.primary};
  }
  @media only screen and (max-width: 420px) {
    width: 25%;
  }
`;

const NavList = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0 0;
  border: ${({ theme }) => theme.dark} 3px solid;
  display: flex;
`;

const StyledHeader = styled.div`
  z-index: 10;
  background: ${({ theme }) => theme.dark};
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  padding: 1%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  border-bottom: 2px solid ${({ theme }) => theme.dark};
`;

export default Header;
