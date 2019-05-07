import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';

import ContactContainer from './ContactStyles';
import TitleContainer from './../../components/common/Title';
import { sendMessage } from './../../utils';
import { env } from './../../config';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    validForm: false
  };

  validateForm = () => {
    const { name, message, email } = this.state;

    if (name && message && EmailValidator.validate(email)) {
      this.setState({ validForm: true });
    } else {
      this.setState({ validForm: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: templateId
    } = env;

    sendMessage(
      templateId,
      receiverEmail,
      this.state.email,
      this.state.name,
      this.state.message,
      this.state.subject
    );

    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      validForm: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, this.validateForm);
  };

  render = () => (
    <ContactContainer id="contact">
      <TitleContainer data-aos="fade-up">
        <p>Contact</p>
        <h2>Reach out for a new project or just say hello</h2>
      </TitleContainer>

      <div className="contact-content">
        <h3>Send me a message</h3>
        <form action="">
          <fieldset>
            <div className="field">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                minLength="2"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field">
              <textarea
                placeholder="Your Message"
                rows="10"
                cols="50"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field">
              <button
                onClick={this.handleSubmit}
                disabled={!this.state.validForm}>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </ContactContainer>
  );
}

export default Contact;
