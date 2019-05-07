import styled from 'styled-components';

const ContactContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 7em;
  z-index: 1;

  .contact-content {
    position: relative;
    width: 100%;
    max-width: 600px;
    padding: 50px;
    background: #0c0c0c;
    h3 {
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: ${props => props.theme.letterSpacing};
    }
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 20px 0;
    .field {
      font-size: 1.4rem;
      input,
      textarea {
        font-size: inherit;
        border: none;
        outline: none;
        margin: 0;
        width: 100%;
        line-height: 1.15;
        color: ${props => props.theme.textColor};
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        background: transparent;
        padding: 15px 0;
        min-height: 6rem;
        transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        &:focus {
          color: ${props => props.theme.white};
          border-bottom: 1px solid ${props => props.theme.primary};
        }
      }

      button {
        font-size: inherit;
        outline: none;
        border: none;
        margin: 30px 0;
        width: 100%;
        background: ${props => props.theme.primary};
        color: ${props => props.theme.white};
        padding: 20px 0;
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.letterSpacing};
        border: 2px solid ${props => props.theme.primary};
        &:disabled {
          cursor: not-allowed;
        }
        &:active {
          background: ${props => props.theme.white};
          color: ${props => props.theme.primary};
        }
      }
    }
  }
`;

export default ContactContainer;
