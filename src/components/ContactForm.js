import React, { Component } from 'react';
import styled from 'styled-components';
import * as EmailValidator from 'email-validator';
import { Form, Input, TextArea } from './common';

class ContactForm extends Component {
  state = { name: '', email: '', message: '', validForm: false };

  validateForm = () => {
    const { name, message, email } = this.state;
    if (name && message && EmailValidator.validate(email)) {
      this.setState({ validForm: true });
    } else {
      this.setState({ validForm: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: templateId
    } = this.props.env;

    this.sendMessage(
      templateId,
      receiverEmail,
      this.state.email,
      this.state.name,
      this.state.message
    );
  };

  sendMessage = async (
    templateId,
    receiverEmail,
    senderEmail,
    name,
    message
  ) => {
    try {
      await window.emailjs.send('mailgun', templateId, {
        name,
        senderEmail,
        receiverEmail,
        message
      });
      this.setState({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send message. Error: ', err);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  render = () => {
    return (
      <Form>
        <Input
          placeholder="Name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Input
          placeholder="Email"
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <TextArea
          placeholder="Message"
          name="message"
          rows={10}
          value={this.state.message}
          onChange={this.handleChange}
          required
        />
        <BtnContainer>
          <SubmitBtn
            onClick={this.handleSubmit}
            disabled={!this.state.validForm}
          >
            Submit
          </SubmitBtn>
        </BtnContainer>
      </Form>
    );
  };
}

const BtnContainer = styled.div`
  width: 100%;
  margin: 2% 0;
  display: flex;
  justify-content: flex-end;
`;

const SubmitBtn = styled.button`
  background: transparent;
  border: 3px solid ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.light};
  padding: 2%;
  width: 6em;
  font-size: 1.2em;
  font-weight: 500;
  transition: all 0.5s;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.primary};
    &:disabled {
      cursor: not-allowed;
    }
  }
  @media only screen and (max-width: 420px) {
    width: 5em;
    font-size: 1em;
  }
`;

export default ContactForm;
