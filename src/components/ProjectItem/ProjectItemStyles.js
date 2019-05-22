import styled from 'styled-components';

import device from '../../styles/device';

const ProjectItemContainer = styled.li`
  display: grid;
  grid-template-columns: ${props => (props.idx % 2 ? '4fr 3fr' : '3fr 4fr')};
  grid-auto-flow: dense;
  @media ${device.tablet} {
    grid-template-columns: none;
    margin-bottom: 10rem;
    &:last-child {
      margin: 0;
    }
  }

  .parallax {
    grid-column: ${props => (props.idx % 2) + 1};
    z-index: 1;
    @media ${device.tablet} {
      grid-column: 1;
    }
    .img {
      background: url(${props => props.img}) center center/contain no-repeat;
      height: 400px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      -webkit-transition: all 0.5s ease-in-out;
      @media ${device.tablet} {
        display: block;
        height: 300px;
      }
      &:hover {
        transform: scale(1.03);
        -webkit-transform: scale(1.03);
      }
    }
  }

  .text {
    padding: 15%;
    @media ${device.mobileL} {
      padding: 25px 0;
    }
    h4 {
      margin: 0;
      font-weight: 200;
      letter-spacing: ${props => props.theme.letterSpacing};
      font-size: 1.3rem;
      text-transform: uppercase;
      color: ${props => props.theme.textColor};
    }
    h2 {
      margin: 0;
      a {
        color: ${props => props.theme.white};
      }
    }
  }
`;

export default ProjectItemContainer;
