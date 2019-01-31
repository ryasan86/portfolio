import React, { Component } from 'react';
import styled from 'styled-components';
// components
import { Overlay } from './common';

class Card extends Component {
  state = { active: false };

  handleMouseEnter = () => {
    this.setState({ active: true });
  };

  handleMouseLeave = () => {
    this.setState({ active: false });
  };

  openProjectUrl = url => {
    window.open(url, '_blank').focus();
  };

  render() {
    const {
      project: { title, description, imgUrl, projectUrl }
    } = this.props;
    const link = <OverlayLink>{title}</OverlayLink>;

    return (
      <StyledCard onClick={() => this.openProjectUrl(projectUrl)}>
        <Wrapper
          imgUrl={imgUrl}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.state.active ? <Overlay>{link}</Overlay> : ''}
          <Info active={this.state.active}>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
          </Info>
        </Wrapper>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  background: url(${({ imgUrl }) => imgUrl}) center center/contain no-repeat;
  position: relative;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  padding: 6px 10px;
  display: flex;
  background: white;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(${({ active }) => (active ? 0 : '2em')});
  transition: transform 0.3s;
`;

const CardTitle = styled.h4`
  margin: 0;
`;

const CardText = styled.p`
  margin: 0;
`;

const OverlayLink = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

export default Card;
