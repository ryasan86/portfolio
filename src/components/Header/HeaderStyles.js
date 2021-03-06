import styled from 'styled-components';
import device from '../../styles/device';

const HeaderContainer = styled.header`
  padding: 2em 15%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    padding: 2em 2%;
  }

  .navbar-brand {
    .logo {
      font-size: 2rem;
      text-transform: uppercase;
      color: ${props => props.theme.white};
      font-weight: 400;
      letter-spacing: 5px;
      padding: 7px;
      text-align: center;
      display: flex;
      align-items: center;
      .logo-img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background: url('https://i.postimg.cc/66gz504w/meCopy.jpg') center center/cover no-repeat;
        margin-right: 15px;
      }
    }
  }
`;

export default HeaderContainer;
