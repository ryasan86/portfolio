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
    font-size: 0.8em;
  }
`;

const NavList = styled.ul`
  height: ${({theme}) => theme.headerHeight};
  width: 100%;
  margin: 0 0;
  border: ${({ theme }) => theme.dark} 3px solid;
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
`;

const StyledHeader = styled.div`
  z-index: 10;
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background: ${({ theme }) => theme.dark};
  display: flex;
  align-items: center;
  position: fixed;
  border-bottom: 2px solid ${({ theme }) => theme.dark};
`;

export default Header;
