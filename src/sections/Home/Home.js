import React from 'react';
import Typist from 'react-typist';

import HomeContainer from './HomeStyles';
import Link from '../../components/common/ScrollLink';
import { loaderDelay } from '../../constants';

const typingDelay = 75;
const backspaceDelay = 1000;

const Home = () => (
  <HomeContainer id="home">
    <div className="inner" data-aos="fade-up">
      <p>Hello! I'm</p>
      <div className="typist-container">
        <Typist avgTypingDelay={typingDelay} cursor={{ show: false }}>
          <Typist.Delay ms={loaderDelay + typingDelay} />
          <h1>a developer</h1>
          <Typist.Backspace count={11} delay={backspaceDelay} />
          <h1>ryan santos</h1>
        </Typist>
      </div>
      <Link className="button" to="contact">
        Start a Project
      </Link>
    </div>
  </HomeContainer>
);

export default Home;
