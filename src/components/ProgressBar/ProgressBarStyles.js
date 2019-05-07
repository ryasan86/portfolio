import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 0.8rem;
`;

const ProgressBar = styled.div.attrs(({ scrollPct }) => ({
  style: { width: `${scrollPct}%` },
}))`
  background: ${props => props.theme.primary};
  height: 8px;
  transition: width 0.6s ease;
  -webkit-transition: width 0.6s ease;
  -moz-transition: width 0.6s ease;
  -ms-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
`;

export { ProgressBar };
export default ProgressBarContainer;
