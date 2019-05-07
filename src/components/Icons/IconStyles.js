import styled from 'styled-components';

const StyledSVG = styled.svg`
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  ${props => props.css};
`;

export { StyledSVG };
