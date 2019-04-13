import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';
import { flexCenter, followUrl } from './../utils';
import Icons from './../images';
import { links } from './../data.json';
// components
import { ScrollBtn, Logo } from './common';

class Footer extends Component {
  render = () => (
    <FooterWrap>
      <div className="btn-container">
        <ScrollBtn to="Intro" icon={Icons.upArrow} styles={ScrollBtnStyles} />
      </div>
      <div className="logo-container">
        {links.map(({ name, url }, i) => (
          <LogoLink key={i} onClick={() => followUrl(url)}>
            <FooterLogo src={Icons[name]} />
          </LogoLink>
        ))}
      </div>
      <div className="txt-container">
        <NormalText>RYAN SANTOS</NormalText>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  ${flexCenter};
  height: 20%;
  width: 100%;
  background: ${({ theme }) => darken(0.1, theme.primary)};
  position: absolute;
  bottom: 0;
  flex-direction: column;
  .btn-container {
    ${flexCenter};
  }
  .logo-container {
    width: 10%;
    display: flex;
    justify-content: space-around;
    margin: 2%;
  }
  .txt-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
  }
`;

const ScrollBtnStyles = css`
  width: 3em;
  height: 4em;
  background: ${({ theme }) => theme.secondary};
  position: absolute;
  transition: all 0.5s;
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

const LogoLink = styled.a`
  margin: 0 15%;
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
  padding: 0 2%;
  @media only screen and (max-width: 450px) {
    font-size: 7px;
  }
`;

export default Footer;
