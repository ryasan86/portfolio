import React, { Component } from 'react';
import styled from 'styled-components';

class Card extends Component {
  state = { active: false };

  handleMouseEnter = () => {
    this.setState({ active: true });
  };

  handleMouseLeave = () => {
    this.setState({ active: false });
  };

  render() {
    const {
      project: { title, description, imgUrl }
    } = this.props;

    return (
      <StyledCard>
        <Wrapper
          imgUrl={imgUrl}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
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
  /* margin-top: 15px; */
  margin: 0;
`;

const CardText = styled.p`
  margin: 0;
`;

export default Card;
