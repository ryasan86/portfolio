import styled from 'styled-components';
import { field } from './../../utils';

const Input = styled.input`
  ${field}
  width: 100%;
  font-size: 1.2em;
  @media only screen and (max-width: 420px) {
    font-size: 1em;
  }
`;

export { Input };
