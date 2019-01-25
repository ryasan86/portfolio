import React, { Component } from 'react';
import styled from 'styled-components';
import { flexCenter } from './../utils';
// components
import { Section } from './../components/common';

class Contact extends Component {
  render = () => {
    return (
      <ContactSection id={this.props.id}>
        <LargeText>Contact</LargeText>
      </ContactSection>
    );
  };
}

const ContactSection = styled(Section)`
  ${flexCenter}
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.light};
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

export default Contact;
