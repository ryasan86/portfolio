import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { GITHUB } from '../images';
// components
import { Logo } from './common';

const Header = () => (
  <StyledHeader>
    <LinkStyled to="one" spy={true} smooth={true} duration={500}>
      one
    </LinkStyled>
    |
    <LinkStyled to="two" spy={true} smooth={true} duration={500}>
      two
    </LinkStyled>
    |
    <LinkStyled to="three" spy={true} smooth={true} duration={500}>
      three
    </LinkStyled>
    |
    <LinkStyled to="four" spy={true} smooth={true} duration={500}>
      four
    </LinkStyled>
    <GithubIcon src={GITHUB} />
  </StyledHeader>
);

const LinkStyled = styled(Link)`
  color: white;
  cursor: pointer;
`;

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.color.dark};
  width: 100%;
  padding: 1%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  border-bottom: 2px solid ${({ theme }) => theme.color.dark};
`;

const wobble = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(-30deg) }
  50% { transform: rotate(30deg) }
  75% { transform: rotate(-30deg) }
  100% { transform: rotate(0deg) }
`;

const GithubIcon = styled(Logo)`
  &:hover {
    animation: ${wobble} 1s;
  }
`;

export default Header;
