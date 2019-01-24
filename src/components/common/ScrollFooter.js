import styled from 'styled-components';
import { flexCenter } from './../../utils/flexCenter';

const ScrollFooter = styled.div`
  ${flexCenter}
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
`;

export { ScrollFooter };
