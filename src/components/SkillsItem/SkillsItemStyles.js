import styled, { keyframes } from 'styled-components';

const animationDelay = 0.3;

const increaseProgress = percent => keyframes`
  0% { width: 0%; }
  100% { width: ${percent}% }
`;

const increaseDot = percent => keyframes`
  0% { left: 0; }
  100% { left: ${percent}% }
`;

const showPercent = keyframes`
  100% { opacity: 1 }
`;

const SkillsItemContainer = styled.li`
  width: 100%;

  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    small {
      font-size: 1.2rem;
      opacity: 0;
      &.started {
        animation: ${showPercent} 1s ease-out;
        animation-delay: ${props =>
          props.idx * animationDelay + animationDelay}s;
        animation-fill-mode: forwards;
      }
    }
  }

  .bar-container {
    height: 0.4rem;
    width: 100%;
    position: relative;
    .progress-bar {
      width: 100%;
      height: 100%;
      background: #1f1f1f;
      position: relative;
      &.started {
        &:before {
          content: '';
          height: 100%;
          background: ${props => props.theme.primary};
          position: absolute;
          animation: ${props => increaseProgress(props.percent)} 1s ease-out;
          animation-delay: ${props => props.idx * animationDelay}s;
          animation-fill-mode: forwards;
        }
        &:after {
          content: '';
          background: ${props => props.theme.primary};
          position: absolute;
          width: 1rem;
          height: 1rem;
          top: -0.3rem;
          border-radius: 50%;
          animation: ${props => increaseDot(props.percent)} 1s ease-out;
          animation-delay: ${props => props.idx * animationDelay + 0.01}s;
          animation-fill-mode: forwards;
        }
      }
    }
  }
`;

export default SkillsItemContainer;
