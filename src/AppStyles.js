import styled from 'styled-components';
import { darken } from 'polished';

const AppContainer = styled.div`
  background: ${props => props.theme.black};
  font-family: ${props => props.theme.fontPrimary};
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: 400;
  color: ${props => darken(0.45, props.theme.white)};

  &:after {
    position: fixed;
    top: -150px;
    right: -50px;
    bottom: 0;
    content: '';
    width: 400px;
    height: 600px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    -webkit-transform: rotate(-30deg);
    -moz-transform: rotate(-30deg);
    -ms-transform: rotate(-30deg);
    -o-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }

  &:before {
    position: fixed;
    top: 500px;
    left: -100px;
    bottom: 0;
    content: '';
    width: 400px;
    height: 400px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    transform: rotate(20deg);
  }

  .go-top {
    position: fixed;
    z-index: 9999;
    width: 60px;
    height: 60px;
    margin: 30px;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    background: #262626;
    font-size: 2.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    &:hover {
      color: ${props => props.theme.white};
    }
  }
`;

export default AppContainer;
