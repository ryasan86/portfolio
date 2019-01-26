import React, { Component } from 'react';
import styled from 'styled-components';
import { flexCenter } from './../utils';
// components
import ContactForm from './../components/ContactForm';
import Footer from './../components/Footer';
import { Section, SectionContent } from './../components/common';
import { H2, P } from './../components/text';

class Contact extends Component {
  render = () => {
    return (
      <ContactSection id={this.props.id}>
        <ContactContent>
          <TextContainer>
            <LargeText>Contact</LargeText>
            <NormalText>Have a question or want to work together?</NormalText>
          </TextContainer>
          <ContactForm />
        </ContactContent>
        <Footer />
      </ContactSection>
    );
  };
}

const ContactSection = styled(Section)`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  display: flex;
  justify-content: center;
`;

const ContactContent = styled(SectionContent)`
  ${flexCenter};
  flex-direction: column;
  min-width: 50%;
  height: calc(80% - 50px);
  z-index: 1;
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.light};
  text-align: center;
`;

const LargeText = styled(H2)`
  letter-spacing: 0.1em;
  margin: 0;
`;

const NormalText = styled(P)`
  font-size: 0.8em;
  margin: 10% 0;
  @media only screen and (min-width: 425px) {
    font-size: 1.3em;
    font-weight: 500;
  }
`;

export default Contact;
