import React, { Component } from 'react';
import styled from 'styled-components';
import { flexCenter } from './../utils';
import { DOWN_ARROW } from './../images';
// components
import {
  Section,
  SectionContent,
  ScrollFooter,
  ScrollBtn
} from './../components/common';
import { H1, H2, P } from './../components/text';

class Intro extends Component {
  handleCanvasRef = canvas => {
    // const c = canvas.getContext('2d');
    // // rectangle
    // c.fillStyle = 'rgba(0, 0, 0, 0.1)';
    // c.fillRect(0, 50, 50, 50);
    // c.fillRect(100, 50, 50, 50);
    // c.fillRect(200, 50, 50, 50);
    // // c.strokeStyle = '#fa34a3'
    // // c.begin
  };

  render = () => {
    return (
      <IntroSection id={this.props.id}>
        <IntroContent>
          <Canvas ref={this.handleCanvasRef} />
          <TextContainer>
            <LargeText data-aos="fade-down">HELLO</LargeText>
            <MediumText data-aos="fade-left">I'M RYAN</MediumText>
            <NormalText data-aos="fade-right">CODE + DESIGN</NormalText>
          </TextContainer>
        </IntroContent>
        <ScrollFooter>
          <ScrollBtn to="About" label="About" icon={DOWN_ARROW} />
        </ScrollFooter>
      </IntroSection>
    );
  };
}

const IntroSection = styled(Section)`
  background: linear-gradient(
    to right,
    #48c9b0,
    ${({ theme }) => theme.primary}
  );
  color: ${({ theme }) => theme.light};
  @media only screen and (min-width: 768px) {
    margin-bottom: 20%;
  }
`;

const IntroContent = styled(SectionContent)`
  width: 100%;
  ${flexCenter};
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.light};
`;

const LargeText = styled(H1)`
  @media only screen and (min-width: 425px) {
    letter-spacing: 0.12em;
    font-weight: 700;
    padding-left: 0px;
  }
`;

const MediumText = styled(H2)`
  letter-spacing: 0.15em;
  margin-top: 1%;
  @media only screen and (min-width: 425px) {
    font-weight: 500;
    letter-spacing: 0.13em;
  }
`;

const NormalText = styled(P)`
  letter-spacing: 0.699em;
  margin-top: 6%;
  @media only screen and (min-width: 425px) {
    font-size: 1.5em;
    letter-spacing: 0.78em;
    padding-left: 1%;
  }
`;

export default Intro;
