import React, { Component, Fragment } from 'react';
import { GLITCH_BG } from './../constants';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { summary } from './../data.json';
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

class Summary extends Component {
  renderGlitchImgs = () => {
    if (this.props.enteredAbout) {
      const glitchImages = Array(5)
        .fill()
        .map((_, i) => <GlitchImg key={i} glitchBg={GLITCH_BG} />);

      return <Glitch>{glitchImages}</Glitch>;
    }
  };

  renderTitle = () => {
    if (this.props.enteredAbout) {
      return <SummaryTitle>About me</SummaryTitle>;
    }
  };

  renderSummary = () => {
    if (this.props.enteredAbout) {
      const summaryText = summary.map((text, i) => (
        <Fragment key={i}>
          <P>{text}</P>
          <br />
        </Fragment>
      ));

      return <TextContainer>{summaryText}</TextContainer>;
    }
  };

  render = () => (
    <SummaryWrap>
      {this.renderGlitchImgs()}
      {this.renderTitle()}
      {this.renderSummary()}
    </SummaryWrap>
  );
}

const SummaryWrap = styled.div`
  height: 100%;
  overflow: scroll;
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
  background: url(${({ glitchBg }) => glitchBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.15;
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
  color: ${({ theme }) => theme.primary};
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
