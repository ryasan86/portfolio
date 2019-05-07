import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { css } from 'styled-components';

import AboutContainer from './AboutStyles';
import Icon from '../../components/Icons/index';
import theme from '../../styles/theme';
import { socials } from '../../constants';

const About = () => (
  <AboutContainer id="about">
    <div className="inner">
      <Parallax y={['800px', '-800px']} styleInner={{ height: '100%'}}>
        <div className="about-img"/>
      </Parallax>
      <div className="about-desc">
        <h1>About</h1>
        <div className="about-text" data-aos="fade-up">
          <h2>Hi! I'm a web developer.</h2>
          <p>Isn't it cool how we can just put together some weird characters in a text file, add a js/css/html extension, and all of a sudden have colors and cool animations to look at?</p>
          <p>I think so too! I'm a passionate developer based in Los Angeles. I enjoy experimenting with stuff ranging from front-end frameworks to back-end data stores.</p>
          <p>I constantly make an effort to learn and improve my skills.  The more you know the cooler the things you can build!</p>
          <ul className="about-social">
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
          <h5>Contact me here!</h5>
          <p>Email:{' '}             
            <button
              className="button-link"
              onClick={() =>
                window.location.href = 'mailto:ryansantos86@gmail.com?subject=sup!&body=say hello'
              }>
              ryansantos86@gmail.com
            </button></p>
          <p>Phone: <button className="button-link">(310)-872-6851</button></p>
        </div>
      </div>
    </div>
  </AboutContainer>
);

const iconStyles = css`
  fill: ${theme.primary};
`;

export default About;
