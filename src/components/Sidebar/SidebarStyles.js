import styled from 'styled-components';

const SidebarContainer = styled.nav`
  background: #0c0c0c;
  color: ${props => props.theme.textColor};
  font-family: 'montserrat-light', sans-serif;
  font-size: 1.3rem;
  line-height: 1.846;
  padding: 3.6rem 3rem 3.6rem 3.6rem;
  height: 100%;
  width: 300px;
  position: fixed;
  right: 0;
  top: 0;
  border-left: 1px solid ${props => props.theme.textColor};
  overflow-y: auto;
  overflow-x: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transform: translateX(${props => (props.menuIsOpen ? 0 : '100%')});
  -webkit-transform: translateX(${props => (props.menuIsOpen ? 0 : '100%')});
  -ms-transform: translateX(${props => (props.menuIsOpen ? 0 : '100%')});
  -moz-transform: translateX(${props => (props.menuIsOpen ? 0 : '100%')});
  -o-transform: translateX(${props => (props.menuIsOpen ? 0 : '100%')});

  div {
    display: flex;
    justify-content: space-between;
    h4 {
      margin: 30px 0;
      font-weight: 200;
      letter-spacing: ${props => props.theme.letterSpacing};
      font-size: 1.3rem;
      text-transform: uppercase;
      color: ${props => props.theme.textColor};
    }
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 50px;
    li {
      display: flex;
      margin: 20px 0;
      a {
        color: ${props => props.theme.white};
        width: 100%;
        cursor: pointer;
        padding: 5px 0;
        font-size: 3rem;
        display: flex;
        align-items: center;
        span {
          height: 20px;
          color: ${props => props.theme.textColor};
          font-size: 1.2rem;
          border-bottom: 1px solid ${props => props.theme.textColor};
          margin-right: 10px;
          transform: translateY(-2px);
        }
        &:hover {
          color: ${props => props.theme.primary};
        }
      }
    }
  }
`;

export default SidebarContainer;
