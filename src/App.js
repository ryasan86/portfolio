import React, { Component } from 'react';
import styled from 'styled-components';
// import Waypoint from 'react-waypoint';
import { BG_1, BG_2, SECTIONS } from './constants';
// components
import Header from './components/Header';

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

  // change parallax background depending on how far down user has scrolled
  listenForBGChange = () => {
    const {
      bg,
      AboutOffsetTop,
      ProjectsOffsetTop,
      ContactOffsetTop
    } = this.state;
    if (window.scrollY <= AboutOffsetTop && bg !== BG_1) {
      this.setState({
        bg: BG_1.imgUrl,
        desktopStyles: BG_1.desktopStyles,
        mobileStyles: BG_1.mobileStyles
      });
    } else if (window.scrollY <= ProjectsOffsetTop && bg !== BG_2) {
      this.setState({
        bg: BG_2.imgUrl,
        desktopStyles: BG_2.desktopStyles,
        mobileStyles: BG_2.mobileStyles
      });
    } else if (window.scrollY <= ContactOffsetTop && !bg) {
      this.setState({ bg: null, desktopStyles: null, mobileStyles: null });
    }
  };

  getOffsetTop = el => {
    const { offsetId } = el.dataset;
    const offsetTop = el.offsetTop;
    this.setState({ [offsetId]: offsetTop });
  };

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
        {SECTIONS.map(({ section, Component }, i) => (
          <Component id={section} key={i} getOffsetTop={this.getOffsetTop} />
        ))}
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
