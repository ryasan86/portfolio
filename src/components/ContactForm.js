import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

class ContactForm extends Component {
  state = { name: '', email: '', message: '' };

  componentDidMount = () => {
    // process.env.REACT_APP_EMAILJS_USERID = 'test'
    // console.log(process.env)
  }

  handleSubmit = async e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render = () => {
    return (
      <Form>
        <Input
          placeholder="Name"
          name="name"
          type="text"
          onChange={this.handleChange}
        />
        <Input
          placeholder="Email"
          name="email"
          type="text"
          onChange={this.handleChange}
        />
        <TextArea
          placeholder="Message"
          name="message"
          rows={10}
          onChange={this.handleChange}
        />
        <BtnContainer>
          <SubmitBtn onClick={this.handleSubmit}>Submit</SubmitBtn>
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
  }
`;

const fieldStyles = css`
  background: rgba(0, 0, 0, 0.3);
  padding: 2%;
  border: none;
  outline: none;
  margin: 2px 0;
  color: ${({ theme }) => theme.light};
  ::placeholder {
    color: ${({ theme }) => lighten(0.15, theme.mainFontColor)};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => lighten(0.15, theme.mainFontColor)};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => lighten(0.15, theme.mainFontColor)};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 450px;
`;

const Input = styled.input`
  ${fieldStyles}
  width: 100%;
  font-size: 1.2em;
`;

const TextArea = styled.textarea`
  ${fieldStyles}
  margin: 2px 0;
  font-size: 1.4em;
  font-weight: 500;
`;

export default ContactForm;
