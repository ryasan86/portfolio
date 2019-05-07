import styled from 'styled-components';

const NavToggleContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  -ms-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;

  /* open nav toggle */
  i.open {
    position: relative;
    width: 40px;
    height: 2px;
    color: ${props => props.theme.black};
    background: ${props => props.theme.white};
    transition: all 0.2s ease-out;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    &:before,
    &:after {
      content: '';
      width: 40px;
      height: 2px;
      background: ${props => props.theme.white};
      position: absolute;
      left: 0;
      transition: 0.2s;
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      -ms-transition: 0.2s;
      -o-transition: 0.2s;
    }
  }

  & i.open:before {
    top: -7px;
  }
  & i.open:after {
    bottom: -7px;
  }
  &:hover i.open:before {
    top: -10px;
  }
  &:hover i.open:after {
    bottom: -10px;
  }

  /* close nav toggle */
  i.close {
    position: relative;
    width: 32px;
    height: 32px;
    &:before,
    &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background: ${props => props.theme.white};
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export default NavToggleContainer;
