import React from 'react';
import Typist from 'react-typist';

import HomeContainer from './HomeStyles';
import Link from '../../components/common/ScrollLink';

const Home = () => (
  <HomeContainer id="home">
    <div className="inner" data-aos="fade-up">
      <p>Hello! I'm</p>
      <div className="typist-container">
        <Typist avgTypingDelay={110} cursor={{ show: false }}>
          <h1>Ryan Santos</h1>
        </Typist>
      </div>
      <Link className="button" to="contact">
        Start a Project
      </Link>
    </div>
  </HomeContainer>
);

export default Home;
