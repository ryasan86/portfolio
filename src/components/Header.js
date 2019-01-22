import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GITHUB } from '../images';
// components
import { Logo } from './common';

const Header = () => (
  <StyledHeader>
    <GithubIcon src={GITHUB} />
  </StyledHeader>
);

const StyledHeader = styled.div`
  width: 100%;
  padding: 1%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
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
