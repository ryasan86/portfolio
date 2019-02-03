import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { flexCenter } from './../utils';
import { DOWN_ARROW } from './../images';
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
            <StyledTypist>
              <TypistText>CODE + DeSIGN</TypistText>
              <Typist.Backspace count={5} delay={200} />
              <TypistText>ESIGN</TypistText>
            </StyledTypist>
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
`;

const IntroContent = styled(SectionContent)`
  width: 100%;
  ${flexCenter};
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.light};
`;

const LargeText = styled.div`
  font-size: 5em;
  text-align: center;
  font-weight: bold;
  @media only screen and (min-width: 600px) {
    font-size: 10em;
  }
`;

const MediumText = styled.div`
  font-size: 2.8em;
  text-align: center;
  letter-spacing: 0.17em;
  @media only screen and (min-width: 600px) {
    font-size: 5em;
    letter-spacing: 0.26em;
  }
`;

const StyledTypist = styled(Typist)`
  text-align: center;
  @media only screen and (min-width: 600px) {
  }
`;

const TypistText = styled.span`
  font-size: 0.9em;
  letter-spacing: 0.73em;
  @media only screen and (min-width: 600px) {
    font-size: 1.6em;
    letter-spacing: 0.9em;
  }
`;

export default Intro;
