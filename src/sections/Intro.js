import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { lighten } from 'polished';
import { flexCenter } from './../utils';
import Icons from './../images';
// components
import {
  Section,
  SectionContent,
  ScrollFooter,
  ScrollBtn
} from './../components/common';

class Intro extends Component {
  render = () => (
    <IntroSection id={this.props.id}>

      <IntroContent>
        <LargeText data-aos="fade-down">HELLO</LargeText>
        <MediumText data-aos="fade-left">I'M RYAN</MediumText>
        <Typist avgTypingDelay={110}>
          <TypistText>CODE + DeSIGN</TypistText>
          <Typist.Backspace count={5} delay={200} />
          <TypistText>ESIGN</TypistText>
        </Typist>
      </IntroContent>

      <ScrollFooter>
        <ScrollBtn to="About" label="About" icon={Icons.downArrow} />
      </ScrollFooter>
    </IntroSection>
  );
}

const IntroSection = styled(Section)`
  background: linear-gradient(
    to right,
    ${({ theme }) => lighten(0.15, theme.primary)},
    ${({ theme }) => theme.primary}
  );
`;

const IntroContent = styled(SectionContent)`
  color: ${({ theme }) => theme.light};
  width: 100%;
  ${flexCenter};
  flex-direction: column;
  text-align: center;
`;

const LargeText = styled.div`
  font-size: 5em;
  font-weight: bold;
  @media only screen and (min-width: 600px) {
    font-size: 10em;
  }
`;

const MediumText = styled.div`
  font-size: 2.92em;
  letter-spacing: 0.17em;
  margin-left: 0.17em;
  @media only screen and (min-width: 600px) {
    font-size: 5em;
    letter-spacing: 0.3em;
    margin-left: 0.3em;
  }
`;

const TypistText = styled.span`
  font-size: 0.95em;
  letter-spacing: 0.73em;
  @media only screen and (min-width: 600px) {
    font-size: 1.185em;
    letter-spacing: 1.55em;
  }
`;

export default Intro;
