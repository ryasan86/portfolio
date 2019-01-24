import React, { Component } from 'react';
import styled from 'styled-components';
import { flexCenter } from './../utils';
// components
import {
  SectionWrap,
  ScrollFooter,
  ScrollFooterButton
} from './../components/common';

class Intro extends Component {
  render = () => {
    return (
      <IntroWrap>
        <div>
          <LargeText data-aos="fade-down">HELLO</LargeText>
          <MediumText data-aos="fade-left">I'M RYAN</MediumText>
          <SmallText data-aos="fade-right">I'M A WEB DEVELOPER</SmallText>
        </div>
        <ScrollFooter>
          <ScrollFooterButton to="About" />
        </ScrollFooter>
      </IntroWrap>
    );
  };
}

const IntroWrap = styled(SectionWrap)`
  ${flexCenter};
  background: linear-gradient(
    to right,
    #48c9b0,
    ${({ theme }) => theme.primary}
  );
  color: ${({ theme }) => theme.light};
  margin-bottom: 30%;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.light};
`;

const LargeText = styled(Text)`
  font-size: 7em;
  letter-spacing: 0.12em;
  font-weight: 700;
  padding-left: 0px;
`;

const MediumText = styled(Text)`
  font-size: 5em;
  font-weight: 500;
  letter-spacing: 0.13em;
  margin-top: 1%;
`;

const SmallText = styled(Text)`
  font-size: 1.5em;
  letter-spacing: 0.32em;
  padding-left: 1%;
  margin-top: 6%;
`;

export default Intro;
