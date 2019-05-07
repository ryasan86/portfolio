import React from 'react';
import { css } from 'styled-components';

import FooterContainer from './FooterStyles';
import Icon from './../Icons/index';
import { socials, portfolioRepo } from '../../constants';

const Footer = () => {
  const repoLink = (
    <button
      className="button-link"
      onClick={() => window.open(portfolioRepo, '_blank').focus()}>
      React
    </button>
  );

  return (
    <FooterContainer>
      <div className="footer-content" data-aos="fade-up">
        <ul>
          {socials.map((s, i) => (
            <li
              key={s.name}
              data-aos="fade-up"
              data-aos-delay={i * 100 + 50}
              onClick={() => window.open(s.url, '_blank').focus()}>
              <Icon name={s.name} css={iconStyles} />
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
        <small>Built with <span role="img" aria-label="heart"> ❤️ </span> using {repoLink}</small>
      </div>
    </FooterContainer>
  );
};

const iconStyles = css`
  fill: rgba(255, 255, 255, 0.3);
`;

export default Footer;
