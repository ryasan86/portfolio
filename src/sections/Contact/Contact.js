import React, { useState, useEffect } from 'react';
import * as EmailValidator from 'email-validator';

import ContactContainer from './ContactStyles';
import TitleContainer from './../../components/common/Title';
import sendMessage from './../../utils/sendMessage';
import { env } from './../../config';

const Contact = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const validateForm = () => {
    const { name, message, email } = fields;

    if (name && message && EmailValidator.validate(email)) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: templateId,
    } = env;

    sendMessage(
      templateId,
      receiverEmail,
      fields.email,
      fields.name,
      fields.message,
      fields.subject,
    );

    setFields({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setFormIsValid(false);
  };

  const handleChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  useEffect(validateForm, [fields]);

  return (
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
                value={fields.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <textarea
                placeholder="Your Message"
                rows="10"
                cols="50"
                name="message"
                value={fields.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <button disabled={!formIsValid} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </ContactContainer>
  );
};

export default Contact;
