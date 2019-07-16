import React from 'react';

import FooterContainer from './FooterStyles';
import Icon from './../Icons/index';
import { socials } from '../../constants';

const Footer = () => (
  <FooterContainer>
    <div className="footer-content" data-aos="fade-up">
      <ul>
        {socials.map((s, i) => (
          <li
            key={s.name}
            data-aos="fade-up"
            data-aos-delay={i * 100 + 50}
            onClick={() => window.open(s.url, '_blank').focus()}>
            <Icon name={s.name} />
          </li>
        ))}
      </ul>
      <h2>Contact Me</h2>
      <button
        className="button-link mail-button"
        onClick={() =>
          window.location.href = 'mailto:ryansantos86@gmail.com?subject=sup!&body=say hello'
        }>
        ryansantos86@gmail.com
      </button>
    </div>
  </FooterContainer>
);


export default Footer;
