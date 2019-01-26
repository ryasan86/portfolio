import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';
import { flexCenter } from './../utils';
import { UP_ARROW, LINKEDIN, CODEPEN, GITHUB } from './../images';
// components
import { ScrollBtn, Logo } from './common';

class Footer extends Component {
  render = () => {
    return (
      <FooterWrap>
        <BtnContainer>
          <ScrollBtn to="Intro" icon={UP_ARROW} styles={ScrollBtnStyles} />
        </BtnContainer>
        <LogoContainer>
          <FooterLogo src={GITHUB} />
          <FooterLogo src={CODEPEN} />
          <FooterLogo src={LINKEDIN} />
        </LogoContainer>
        <NormalText>RYAN SANTOS</NormalText>
      </FooterWrap>
    );
  };
}

const FooterWrap = styled.div`
  ${flexCenter};
  height: 20%;
  width: 100%;
  background: ${({ theme }) => darken(0.1, theme.primary)};
  position: absolute;
  bottom: 0;
  flex-direction: column;
`;

const ScrollBtnStyles = css`
  width: 50px;
  height: 60px;
  background: ${({ theme }) => theme.secondary};
  position: absolute;
  transition: all 0.5s;
  margin-top: -35px;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
`;

const BtnContainer = styled.div`
  ${flexCenter};
`;

const LogoContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
  margin: 2%;
`;

const wobble = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(-30deg) }
  50% { transform: rotate(30deg) }
  75% { transform: rotate(-30deg) }
  100% { transform: rotate(0deg) }
`;

const FooterLogo = styled(Logo)`
  &:hover {
    animation: ${wobble} 1s;
    opacity: 0.8;
  }
`;

const NormalText = styled.p`
  font-size: 0.8em;
  letter-spacing: 0.4em;
`;

export default Footer;
