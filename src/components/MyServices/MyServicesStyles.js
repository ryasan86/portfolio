import styled from 'styled-components';

import device from '../../styles/device';

const MyServicesContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10rem;
  flex-wrap: wrap;
  @media ${device.tablet} {
    margin-right: 0;
    flex-direction: row;
    justify-content: space-around;
  }

  .service-item {
    margin-bottom: 3rem;
    width: 23rem;
    &:last-child {
      margin-bottom: 0;
    }
    .category-list {
      list-style-type: none;
      padding: 0;
      color: ${props => props.theme.white};
      li {
        white-space: nowrap;
      }
    }
  }
`;

export default MyServicesContainer;
