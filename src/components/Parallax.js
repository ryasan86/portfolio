import React, { Component } from 'react';
import styled from 'styled-components';
import threeEntryPoint from './threejs/threeEntryPoint';

class Parallax extends Component {
  componentDidMount = () => {
    threeEntryPoint(this.threeRootElement);
  };

  render = () => {
    return (
      <ParallaxWrap {...this.props.bgSettings}>
        <div
          bg={this.props.bgSettings.bg}
          className="threeDThing"
          ref={element => (this.threeRootElement = element)}
        />
      </ParallaxWrap>
    );
  };
}

const ParallaxWrap = styled.div`
  position: fixed;
  z-index: -1;
  background-color: #05070a;
  height: 100%;
  width: 100%;
  top: 0;
  background: url(${({ bg }) => bg}) center center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ desktopStyles }) => desktopStyles}
  @media only screen and (max-width: 420px) {
    ${({ mobileStyles }) => mobileStyles};
  }

  .threeDThing {
    display: ${({ bg }) => (bg ? 'none' : 'block')};
    @media all and (min-width: 0) and (max-width: 480px) {
      height: 65vh;
      width: 100%;
    }

    @media all and (min-width: 481px) and (max-width: 840px) {
      height: 65vh;
      width: 100%;
    }

    @media all and (min-width: 841px) and (max-width: 1280px) {
      height: 75vh;
      width: 100%;
    }

    @media all and (min-width: 1281px) and (max-width: 1600px) {
      height: 70vh;
      width: 100%;
    }

    @media all and (min-width: 1601px) {
      height: 75vh;
      width: 100%;
    }
  }
`;

export default Parallax;
