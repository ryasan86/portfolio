import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
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
  state = { animationIteration: null };
  
  handleEnter = () => {
    this.setState({ animationIteration: 2 });
  };

  renderGlitchImages = () => {
    return new Array({ length: 5 }).map((_, i) => (
      <GlitchImg
        key={i}
        animationIteration={this.state.animationIteration}
        className="glitch__img"
      />
    ));
  };

  render = () => {
    const { animationIteration } = this.state;
    return (
      <SummaryWrap className="glitch-variables">
        <Waypoint onEnter={this.handleEnter}>
          <div>
            <Glitch>{this.renderGlitchImages()}</Glitch>
            <SummaryTitle animationIteration={animationIteration}>
              About me
            </SummaryTitle>
            <TextContainer
              animationIteration={animationIteration}
              className="content__text"
            >
              {data.summary.map((text, i) => (
                <Fragment key={i}>
                  <P>{text}</P>
                  <br />
                </Fragment>
              ))}
            </TextContainer>
          </div>
        </Waypoint>
      </SummaryWrap>
    );
  };
}

const SummaryWrap = styled.div`
  height: 100%;
`;

const SummaryTitle = styled(H2)`
  color: ${({ theme }) => theme.primary};
  animation-name: ${glitchAnimText};
  animation-duration: var(--time-anim);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  position: relative;
  animation-delay: calc(var(--delay-anim) + var(--time-anim) * 0.2);
  margin-bottom: 10%;
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.mainFontColor};
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
  opacity: 0.6;
  background-color: var(--blend-color-1);
  background-size: cover;
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

export default Summary;
