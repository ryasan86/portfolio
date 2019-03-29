import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished';

import { Link } from './common';
import { SECTIONS as NavLinks } from './../constants';

class Header extends Component {
  state = {
    scrollY: 0
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScrollYChange);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScrollYChange);
  };

  onScrollYChange = () => {
    this.setState({ scrollY: window.scrollY });
  };

  render = () => (
    <StyledHeader scrollY={this.state.scrollY}>
      <NavList>
        {NavLinks.map(({ section }, i) => (
          <Link
            key={i}
            to={section}
            activeClass="active"
            linkstyles={linkStyles}>
            {section}
          </Link>
        ))}
      </NavList>
    </StyledHeader>
  );
}

const slideRight = keyframes`
  from { transform: translateX(-100%); } 
  to { transform: translateX(0); }
`;

const StyledHeader = styled.div`
  z-index: 10;
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background: ${({ theme, scrollY }) =>
    scrollY > 0 ? theme.dark : 'transparent'};
  display: flex;
  align-items: center;
  position: fixed;
  transition: all 0.5s;
  animation: ${slideRight} 0.75s;
`;

const NavList = styled.ul`
  height: ${({ theme }) => theme.headerHeight};
  width: 100%;
  margin: 0 0;
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
`;

const linkStyles = css`
  width: 150px;
  transition: box-shadow 0.1s linear, color 0.1s linear;
  &.active {
    box-shadow: 0 -5px 0 0 ${({ theme }) => theme.primary} inset;
    color: ${({ theme }) => theme.primary};
  }
  &:hover {
    color: ${({ theme }) => lighten(0.3, theme.primary)};
  }
  @media only screen and (max-width: 420px) {
    width: 25%;
    font-size: 0.8em;
  }
`;

export default Header;
