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
  render = () => {
    return (
      <IntroSection id={this.props.id}>
        <IntroContent>
          <TextContainer>
            <LargeText data-aos="fade-down">HELLO</LargeText>
            <MediumText data-aos="fade-left">I'M RYAN</MediumText>
            <NormalText data-aos="fade-right">I'M A WEB DEVELOPER</NormalText>
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
  letter-spacing: 0.27em;
  margin-top: 6%;
  @media only screen and (min-width: 425px) {
    font-size: 1.5em;
    letter-spacing: 0.32em;
    padding-left: 1%;
  }
`;

export default Intro;
