import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import { BG, SECTIONS } from './constants';
import Parallax from './components/Parallax';

class App extends Component {
  state = {
    bgSettings: {},
    AboutOffsetTop: 0,
    ProjectsOffsetTop: 0
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenForBGChange);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.listenForBGChange);
  };

  // change background depending on where the user has scrolled
  listenForBGChange = () => {
    const { bgSettings, AboutOffsetTop, ProjectsOffsetTop } = this.state;

    if (window.scrollY <= AboutOffsetTop && bgSettings.bg) {
      this.setState({ bgSettings: {} });
    } else if (
      window.scrollY > AboutOffsetTop &&
      window.scrollY <= ProjectsOffsetTop &&
      bgSettings.bg !== BG.bg
    ) {
      this.setState({ bgSettings: BG });
    }
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
    return (
      <AppWrap>
        <Header />
        <Parallax bgSettings={this.state.bgSettings} />
        {this.renderSections()}
      </AppWrap>
    );
  };
}

const AppWrap = styled.div`
  height: 100%;
`;

export default App;
