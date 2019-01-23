import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionWrap } from './../components/common';

class Intro extends Component {
  render = () => {
    return (
      <IntroWrap blue={this.props.blue}>
        <div>
          <LargeText>HELLO</LargeText>
          <MediumText>I'M RYAN</MediumText>
          <SmallText>I'M A WEB DEVELOPER</SmallText>
        </div>
      </IntroWrap>
    );
  };
}

const IntroWrap = styled(SectionWrap)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ blue, theme }) => blue ? theme.color.secondary : theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  margin-bottom: 30vh;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.color.light};
`;

const LargeText = styled(Text)`
  font-size: 7em;
  letter-spacing: 0.1em;
  font-weight: 700;
  padding-left: 0px;
`;

const MediumText = styled(Text)`
  font-size: 5em;
  font-weight: 500;
  letter-spacing: 0.08em;
  margin-top: 1%;
`;

const SmallText = styled(Text)`
  font-size: 2em;
  letter-spacing: 0.11em;
  padding-left: 1%;
  margin-top: 6%;
`;

export default Intro;
