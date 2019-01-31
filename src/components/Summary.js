import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import data from './../data.json';
import {
  glitchAnimText,
  glitchAnim1,
  glitchAnim2,
  glitchAnim3,
  glitchAnimFlash,
  glitch
} from './../utils';
// components
import { H2, P } from './../components/text';

const GLITCH_BG = 'https://i.postimg.cc/7hCRc1FY/coding-1853305-1280.jpg';

class Summary extends Component {
  renderGlitchImgs = () => {
    const images = [];
    if (this.props.enteredAbout) {
      for (let i = 0; i < 5; i++) {
        images.push(<GlitchImg key={i} className="glitch__img" />);
      }
    }
    return <Glitch>{images}</Glitch>;
  };

  renderTitle = () => {
    if (this.props.enteredAbout) {
      return <SummaryTitle>About me</SummaryTitle>;
    }
  };

  renderNormalText = () => {
    if (this.props.enteredAbout) {
      return (
        <TextContainer className="content__text">
          {data.summary.map((text, i) => (
            <Fragment key={i}>
              <P>{text}</P>
              <br />
            </Fragment>
          ))}
        </TextContainer>
      );
    }
  };

  render = () => {
    return (
      <SummaryWrap className="glitch-variables">
        {this.renderGlitchImgs()}
        {this.renderTitle()}
        {this.renderNormalText()}
      </SummaryWrap>
    );
  };
}

const SummaryWrap = styled.div`
  height: 100vh;
  @media only screen and (max-width: 350px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`;

const Glitch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${glitch.glitchWidth};
  height: ${glitch.glitchHeight};
  overflow: hidden;
`;

const commonAnimCSS = css`
  animation-duration: ${glitch.timeAnim};
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;

const GlitchImg = styled.div`
  position: absolute;
  top: calc(-1 * ${glitch.gapVertical});
  left: calc(-1 * ${glitch.gapHorizontal});
  width: calc(100% + ${glitch.gapHorizontal} * 2);
  height: calc(100% + ${glitch.gapVertical} * 2);
  background: url(${GLITCH_BG});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
  background-color: ${glitch.blendColor1};
  transform: translate3d(0, 0, 0);
  background-blend-mode: ${glitch.blendMode1};
  &:nth-child(n + 2) {
    opacity: 0;
  }
  &:nth-child(n + 2) {
    animation-delay: ${glitch.delayAnim};
    ${commonAnimCSS};
  }
  &:nth-child(2) {
    background-color: ${glitch.blendColor2};
    background-blend-mode: ${glitch.blendMode2};
    animation-name: ${glitchAnim1};
  }
  &:nth-child(3) {
    background-color: ${glitch.blendColor3};
    background-blend-mode: ${glitch.blendMode3};
    animation-name: ${glitchAnim2};
  }
  &:nth-child(4) {
    background-color: ${glitch.blendColor4};
    background-blend-mode: ${glitch.blendColor4};
    animation-name: ${glitchAnim3};
  }
  &:nth-child(5) {
    background-color: ${glitch.blendColor5};
    background-blend-mode: ${glitch.blendMode5};
    animation-name: ${glitchAnimFlash};
  }
`;

const SummaryTitle = styled(H2)`
  color: ${({ theme }) => darken(0.1, theme.primary)};
  position: relative;
  margin-bottom: 10%;
  animation-name: ${glitchAnimText};
  animation-delay: calc(${glitch.delayAnim} + ${glitch.timeAnim} * 0.2);
  ${commonAnimCSS};
  @media only screen and (min-width: 350px) {
    margin-top: 20%;
  }
`;

const TextContainer = styled.div`
  color: black;
  animation-name: ${glitchAnimText};
  animation-delay: calc(${glitch.delayAnim} + ${glitch.timeAnim} * 0.25);
  ${commonAnimCSS};
`;

export default Summary;
