import React, { Component } from 'react';
import styled from 'styled-components';
// components
import {
  SectionWrap,
  ScrollFooter,
  ScrollFooterButton
} from './../components/common';

class About extends Component {
  render = () => {
    return (
      <AboutWrap blue={this.props.blue}>
        <LargeText>About</LargeText>
        <ScrollFooter>
          <ScrollFooterButton to="Projects" />
        </ScrollFooter>
      </AboutWrap>
    );
  };
}

const AboutWrap = styled(SectionWrap)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ blue, theme }) =>
    blue ? theme.secondary : theme.primary};
  color: ${({ theme }) => theme.light};
  margin-bottom: 30%;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.light};
`;

const LargeText = styled(Text)`
  font-size: 7em;
  letter-spacing: 0.1em;
  font-weight: 700;
  padding-left: 0px;
`;

export default About;
