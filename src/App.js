import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import { BG_1, BG_2, SECTIONS } from './constants';

class App extends Component {
  state = {
    bg: null,
    desktopStyles: null,
    mobileStyles: null,
    AboutOffsetTop: 0,
    ProjectsOffsetTop: 0,
    ContactOffsetTop: 0
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenForBGChange);
  };

  // change background depending on where the user has scrolled
  listenForBGChange = () => {
    const {
      bg,
      AboutOffsetTop,
      ProjectsOffsetTop,
      ContactOffsetTop
    } = this.state;
    let bgSettings = {};

    if (window.scrollY <= AboutOffsetTop && bg !== BG_1) {
      bgSettings = { ...BG_1 };
    } else if (window.scrollY <= ProjectsOffsetTop && bg !== BG_2) {
      bgSettings = { ...BG_2 };
    } else if (window.scrollY <= ContactOffsetTop && !bg) {
      bgSettings = { bg: null, desktopStyles: null, mobileStyles: null };
    }

    this.setState({ ...bgSettings });
  };

  getOffsetTop = el => {
    const offsetId = el.dataset.offsetId;
    const offsetTop = el.offsetTop;
    this.setState({ [offsetId]: offsetTop });
  };

  renderSections = () =>
    SECTIONS.map(({ section, Component }, i) => (
      <Component id={section} key={i} getOffsetTop={this.getOffsetTop} />
    ));

  render = () => {
    const { bg, desktopStyles, mobileStyles } = this.state;
    return (
      <AppWrap>
        <Header />
        <Parallax
          bg={bg}
          desktopStyles={desktopStyles}
          mobileStyles={mobileStyles}
        />
        {this.renderSections()}
      </AppWrap>
    );
  };
}

const AppWrap = styled.div`
  height: 100%;
`;

const Parallax = styled.div`
  z-index: -1;
  background-color: #05070a;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background: url(${({ bg }) => bg}) center center;
  ${({ desktopStyles }) => desktopStyles}
  @media only screen and (max-width: 420px) {
    ${({ mobileStyles }) => mobileStyles};
  }
`;

export default App;
