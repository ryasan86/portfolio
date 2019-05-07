import styled from 'styled-components';

import device from '../../styles/device';

const ProjectItemContainer = styled.li`
  display: grid;
  grid-template-columns: ${props => (props.idx % 2 ? '4fr 3fr' : '3fr 4fr')};
  grid-auto-flow: dense;
  @media ${device.tablet} {
    grid-template-columns: none;
  }

  .parallax {
    grid-column: ${props => (props.idx % 2) + 1};
    z-index: 1;
    @media ${device.tablet} {
      grid-column: 1;
    }
    .img {
      position: relative;
      background: url(${props => props.img}) left center/cover no-repeat;
      height: 400px;
      @media ${device.tablet} {
        display: block;
        height: 300px;
        background-position: center center;
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
