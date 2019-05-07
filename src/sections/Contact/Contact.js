import React from 'react';

import ContactContainer from './ContactStyles';
import TitleContainer from './../../components/common/Title';

const Contact = () => (
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
            <input type="text" placeholder="Your Name" minLength="2" />
          </div>
          <div className="field">
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="field">
            <input type="text" placeholder="Subject" minLength="2" />
          </div>
          <div className="field">
            <textarea placeholder="Your Message" rows="10" cols="50" />
          </div>
          <div className="field">
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  </ContactContainer>
);

export default Contact;
