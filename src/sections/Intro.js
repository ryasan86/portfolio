import React, { Component } from 'react';
import styled from 'styled-components';
import { flexCenter } from './../utils';
// components
import {
  Section,
  ScrollFooter,
  ScrollFooterButton
} from './../components/common';

class Intro extends Component {
  render = () => {
    return (
      <IntroSection id={this.props.id}>
        <div>
          <LargeText data-aos="fade-down">HELLO</LargeText>
          <MediumText data-aos="fade-left">I'M RYAN</MediumText>
          <SmallText data-aos="fade-right">I'M A WEB DEVELOPER</SmallText>
        </div>
        <ScrollFooter>
          <ScrollFooterButton to="About" />
        </ScrollFooter>
      </IntroSection>
    );
  };
}

const IntroSection = styled(Section)`
  ${flexCenter};
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

const Text = styled.div`
  color: ${({ theme }) => theme.light};
`;

const LargeText = styled(Text)`
  @media only screen and (min-width: 425px) {
    font-size: 7em;
    letter-spacing: 0.12em;
    font-weight: 700;
    padding-left: 0px;
  }

  font-size: 5em;
`;

const MediumText = styled(Text)`
  @media only screen and (min-width: 425px) {
    font-size: 5em;
    font-weight: 500;
    letter-spacing: 0.13em;
    margin-top: 1%;
  }
  font-size: 3em;
  letter-spacing: 0.15em;
`;

const SmallText = styled(Text)`
  @media only screen and (min-width: 425px) {
    font-size: 1.5em;
    letter-spacing: 0.32em;
    padding-left: 1%;
    margin-top: 6%;
  }

  letter-spacing: 0.27em;
`;

export default Intro;
