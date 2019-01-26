import { keyframes } from 'styled-components';

const glitchAnimFlash = keyframes`
	0%, 5% { 
		opacity: 0.2; 
		transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
	}
	5.5%, 100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
	}
`;

export { glitchAnimFlash };
