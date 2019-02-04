import React, { Component } from 'react';
import styled from 'styled-components';
import { flexCenter } from './../utils';
// components
import ContactForm from './../components/ContactForm';
import Footer from './../components/Footer';
import { Section, SectionContent } from './../components/common';
import { H2, P } from './../components/text';

class Contact extends Component {
  handleRef = contactSec => this.props.getOffsetTop(contactSec);

  render = () => (
    <ContactSection
      id={this.props.id}
      data-offset-id={`${this.props.id}OffsetTop`}
      ref={this.handleRef}>

      <ContactContent>
        <LargeText>Contact</LargeText>
        <NormalText>Have a question or want to work together?</NormalText>
        <ContactForm />
      </ContactContent>

      <Footer />
    </ContactSection>
  );
}

const ContactSection = styled(Section)`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;

const ContactContent = styled(SectionContent)`
  ${flexCenter};
  flex-direction: column;
  min-width: 50%;
  height: calc(80% - ${({ theme }) => theme.headerHeight});
`;

const LargeText = styled(H2)`
  color: ${({ theme }) => theme.light};
  letter-spacing: 0.1em;
  margin: 0;
  text-align: center;
`;

const NormalText = styled(P)`
  color: ${({ theme }) => theme.light};
  margin: 10% 0;
  text-align: center;
`;

export default Contact;
