import { keyframes } from 'styled-components';

const glitchAnim3 = keyframes`
	0% { 
		opacity: 1;
		transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
		clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
	}
	1.5% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
		clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
	}
	2% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
		clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
	}
	2.5% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	3% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
		clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
	}
	5% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
		clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
	}
	5.5% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
		clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
	}
	7% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
		clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
	}
	8% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	9% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
		clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
	}
	10.5% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
		clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
	}
	11% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
		clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
	}
	13% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
		clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
	}
	14% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
		clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
	}
	14.5% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
		clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
	}
	15% {
		-webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
		clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
	}
	16% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	18% {
		-webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
		clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
	}
	20% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
		clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
	}
	21.9% {
		opacity: 1;
		transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
	}
	22%, 100% {
		opacity: 0;
		transform: translate3d(0,0,0);
		-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
`;

export { glitchAnim3 };
