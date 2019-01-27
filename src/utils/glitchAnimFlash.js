import { keyframes } from 'styled-components';
import { glitch } from './glitchVariables';

const glitchAnimFlash = keyframes`
	0%, 5% { 
		opacity: 0.2; 
		transform: translate3d(${glitch.gapHorizontal}, ${glitch.gapVertical}, 0);
	}
	5.5%, 100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
	}
`;

export { glitchAnimFlash };
