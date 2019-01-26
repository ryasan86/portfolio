import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import data from './../data.json';
// import { GLITCH_BG } from './../constants';
import {
  glitchAnimText,
  glitchAnim1,
  glitchAnim2,
  glitchAnim3,
  glitchAnimFlash
} from './../utils';
// components
import { H2, P } from './../components/text';

const GLITCH_BG = 'https://i.postimg.cc/7hCRc1FY/coding-1853305-1280.jpg';

class Summary extends Component {
  renderGlitchImgs = () => {
    const images = [];
    for (let i = 0; i < 5; i++) {
      images.push(<GlitchImg key={i} className="glitch__img" />);
    }
    return images;
  };

  render = () => {
    const { hideText } = this.props;
    return (
      <SummaryWrap className="glitch-variables">
        <Glitch>{this.renderGlitchImgs()}</Glitch>
        <SummaryTitle hideText={hideText}>About me</SummaryTitle>

        <TextContainer hideText={hideText} className="content__text">
          {data.summary.map((text, i) => (
            <Fragment key={i}>
              <P>{text}</P>
              <br />
            </Fragment>
          ))}
        </TextContainer>
      </SummaryWrap>
    );
  };
}

const SummaryWrap = styled.div`
  height: 100vh;
`;

const Glitch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--glitch-width);
  height: var(--glitch-height);
  overflow: hidden;
`;

const GlitchImg = styled.div`
  position: absolute;
  top: calc(-1 * var(--gap-vertical));
  left: calc(-1 * var(--gap-horizontal));
  width: calc(100% + var(--gap-horizontal) * 2);
  height: calc(100% + var(--gap-vertical) * 2);
  background: url(${GLITCH_BG});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
  background-color: var(--blend-color-1);
  transform: translate3d(0, 0, 0);
  background-blend-mode: var(--blend-mode-1);
  &:nth-child(n + 2) {
    opacity: 0;
  }
  &:nth-child(n + 2) {
    animation-duration: var(--time-anim);
    animation-delay: var(--delay-anim);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
  &:nth-child(2) {
    background-color: var(--blend-color-2);
    background-blend-mode: var(--blend-mode-2);
    animation-name: ${glitchAnim1};
  }
  &:nth-child(3) {
    background-color: var(--blend-color-3);
    background-blend-mode: var(--blend-mode-3);
    animation-name: ${glitchAnim2};
  }
  &:nth-child(4) {
    background-color: var(--blend-color-4);
    background-blend-mode: var(--blend-mode-4);
    animation-name: ${glitchAnim3};
  }
  &:nth-child(5) {
    background-color: var(--blend-color-5);
    background-blend-mode: var(--blend-mode-5);
    animation-name: ${glitchAnimFlash};
  }
`;

const SummaryTitle = styled(H2)`
  color: ${({ theme }) => darken(0.1, theme.primary)};
  animation-name: ${glitchAnimText};
  animation-duration: var(--time-anim);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  position: relative;
  animation-delay: calc(var(--delay-anim) + var(--time-anim) * 0.2);
  margin-bottom: 10%;
`;

const TextContainer = styled.div`
  color: black;
  animation-name: ${glitchAnimText};
  animation-duration: var(--time-anim);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  max-width: 500px;
  animation-delay: calc(var(--delay-anim) + var(--time-anim) * 0.25);
  @media screen and (max-width: 55em) {
    text-align: center;
  }
`;

export default Summary;
