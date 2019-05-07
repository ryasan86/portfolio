import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 4em 0;
  background: ${props => props.theme.black};
  z-index: 1;
  overflow-y: hidden;

  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 3rem;
      font-weight: 800;
      margin: 0;
    }
    p {
      margin: 0;
      a {
        color: ${props => props.theme.white};
      }
    }
    small {
      margin-top: 40px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    margin: 0 0 40px 0;
    li {
      width: 60px;
      height: 60px;
      padding: 15px;
      background: red;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      margin: 0 5px;
      cursor: pointer;
      &:hover {
        svg {
          fill: ${props => props.theme.white};
        }
      }
    }
  }

  button {
    background: none;
    outline: none;
    border: none;
    color: ${props => props.theme.primary};
    padding: 0;
    &.mail-button {
      font-size: 1.8rem;
      line-height: 1.8;
      font-weight: 400;
      letter-spacing: 1px;
      color: ${props => props.theme.white};
    }
  }
`;

export default FooterContainer;
