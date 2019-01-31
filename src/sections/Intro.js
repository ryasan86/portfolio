import React, { Component } from 'react';
import styled from 'styled-components';
import { flexCenter } from './../utils';
import { DOWN_ARROW } from './../images';
// import { darken } from 'polished';
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
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // // rectangle
    // const c = canvas.getContext('2d');

    // // for (let i = 0; i < 50; i++) {
    // //   const x = Math.random() * window.innerWidth;
    // //   const y = Math.random() * window.innerHeight;
    // //   // dot
    // //   c.beginPath();
    // //   c.arc(x, y, 30, 0, Math.PI * 2, false);
    // //   c.strokeStyle = darken(0.2, 'white');
    // //   c.stroke();
    // // }
    // let x = 200;
    // let dx = 4;
    // const radius = 30;
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   c.clearRect(0, 0, canvas.width, canvas.height);

    //   c.beginPath();
    //   c.arc(x, 200, 30, 0, Math.PI * 2, false);
    //   c.strokeStyle = darken(0, 'white');
    //   c.stroke();

    //   if (x + radius > canvas.width || x - radius < 0) {
    //     dx = -dx;
    //   }

    //   x += dx;
    // };

    // animate();
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
  height: 100%;
  width: 100%;
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
