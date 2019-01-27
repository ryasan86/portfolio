import styled from 'styled-components';
import { field } from './../../utils';

const TextArea = styled.textarea`
  ${field}
  margin: 2px 0;
  font-size: 1.4em;
  font-weight: 500;
  @media only screen and (max-width: 420px) {
    font-size: 1em;
  }
`;

export { TextArea };
