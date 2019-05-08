import React from 'react';
import { withController } from 'react-scroll-parallax';
import { css } from 'styled-components';

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
import theme from './styles/theme';

const App = props => {
  const handleClick = (e, menuIsOpen, toggleMenu) => {
    if (e.target.id !== 'sidebar' && menuIsOpen) toggleMenu(false);
  };

  return (
    <DataContext.Consumer>
      {({ menuIsOpen, toggleMenu }) => (
        <AppContainer onClick={e => handleClick(e, menuIsOpen, toggleMenu)}>
          <ProgressBar />
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <Link to="home" className="go-top">
            <Icon name="upArrow" css={iconStyles} />
          </Link>
        </AppContainer>
      )}
    </DataContext.Consumer>
  );
};

const iconStyles = css`
  fill: ${theme.textColor};
`;

export default withController(App);
