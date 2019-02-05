import React, { Component } from 'react';
import styled from 'styled-components';
import * as EmailValidator from 'email-validator';
import { sendMessage } from './../utils';
import { env } from './../config';
// components
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
    } = env;

    sendMessage(
      templateId,
      receiverEmail,
      this.state.email,
      this.state.name,
      this.state.message
    );

    this.setState({ name: '', email: '', message: '', validForm: false });
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
          onChange={this.handleChange} />
        <Input
          placeholder="Email"
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          required />
        <TextArea
          placeholder="Message"
          name="message"
          rows={10}
          value={this.state.message}
          onChange={this.handleChange}
          required />
        <BtnContainer>
          <SubmitBtn
            onClick={this.handleSubmit}
            disabled={!this.state.validForm}>
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
  min-height: 30px;
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
    font-size: 10px;
    padding: 5px;
  }
`;

export default ContactForm;
