import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionWrap } from './../components/common';

class About extends Component {
  render = () => {
    return (
      <AboutWrap blue={this.props.blue}>
        <LargeText>About</LargeText>
      </AboutWrap>
    );
  };
}

const AboutWrap = styled(SectionWrap)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ blue, theme }) => blue ? theme.color.secondary : theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  margin-bottom: 30%;
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

export default About;
