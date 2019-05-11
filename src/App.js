import React, { useState, useEffect } from 'react';
import { withController } from 'react-scroll-parallax';

import { DataContext } from './providers';
import AppContainer from './AppStyles';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Header from './components/Header/Header';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import Link from './components/common/ScrollLink';
import Icon from './components/Icons';
import Skills from './sections/Skills/Skills';
import { loaderDelay } from './constants';

const App = props => {
  const [sidebarEl, setSidebarEl] = useState(null);

  const handleClick = (e, menuIsOpen, toggleMenu) => {
    if (!sidebarEl.contains(e.target) && menuIsOpen) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    document.querySelector('#loader').classList.add('hide');

    setTimeout(() => {
      document.querySelector('#preloader').classList.add('hide');
    }, loaderDelay);
  });

  return (
    <DataContext.Consumer>
      {({ menuIsOpen, toggleMenu }) => (
        <AppContainer onClick={e => handleClick(e, menuIsOpen, toggleMenu)}>
          <ProgressBar />
          <Header setSidebarEl={setSidebarEl} />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
          <Link to="home" className="go-top">
            <Icon name="upArrow" />
          </Link>
        </AppContainer>
      )}
    </DataContext.Consumer>
  );
};

export default withController(App);
