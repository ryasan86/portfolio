import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';
import { flexCenter } from './../utils';
import { UP_ARROW, LINKEDIN, CODEPEN, GITHUB } from './../images';
import { GITHUB_URL, LINKEDIN_URL, CODEPEN_URL } from './../constants';
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
          <LogoLink href={GITHUB_URL}>
            <FooterLogo src={GITHUB} />
          </LogoLink>
          <LogoLink href={CODEPEN_URL}>
            <FooterLogo src={CODEPEN} />
          </LogoLink>
          <LogoLink href={LINKEDIN_URL}>
            <FooterLogo src={LINKEDIN} />
          </LogoLink>
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
  width: 3em;
  height: 4em;
  background: ${({ theme }) => theme.secondary};
  position: absolute;
  transition: all 0.5s;
  /* margin-top: -2em; */
  bottom: 0;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 420px) {
    width: 2em;
    height: 2em;
    margin-top: -1em;
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

const LogoLink = styled.a`
margin: 0 15%;
`

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
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 2%;
`;

export default Footer;
