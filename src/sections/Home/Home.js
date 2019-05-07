import React from 'react';

import HomeContainer from './HomeStyles';
import Link from '../../components/common/ScrollLink';

const Home = () => (
  <HomeContainer id="home">
    <div data-aos="fade-up">
      <p>Hello! I'm</p>
      <h1>Ryan Santos</h1>
      <Link
        className="button"
        to="contact">
        Start a Project
      </Link>
    </div>
  </HomeContainer>
);

export default Home;
