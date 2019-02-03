import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
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
  render = () => {
    return (
      <IntroSection id={this.props.id}>
        <IntroContent>
          <TextContainer>
            <LargeText data-aos="fade-down">HELLO</LargeText>
            <MediumText data-aos="fade-left">I'M RYAN</MediumText>
            <Typist avgTypingDelay={110}>
              <TypistText>CODE + DeSIGN</TypistText>
              <Typist.Backspace count={5} delay={200} />
              <TypistText>ESIGN</TypistText>
            </Typist>
          </TextContainer>
        </IntroContent>
        <ScrollFooter>
          <ScrollBtn to="About" label="About" icon={Icons.downArrow} />
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
`;

const IntroContent = styled(SectionContent)`
  width: 100%;
  ${flexCenter};
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.light};
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
