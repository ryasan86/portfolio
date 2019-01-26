import Intro from './sections/Intro';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const SECTIONS = [
  { section: 'Intro', Component: Intro },
  { section: 'About', Component: About },
  { section: 'Projects', Component: Projects },
  { section: 'Contact', Component: Contact }
];

const BG_1 = {
  imgUrl: 'https://i.postimg.cc/1tYMscJb/codeBG2.png',
  bgStyle: `background-repeat: repeat;
            filter: blur(2px);
            -webkit-filter: blur(2px);`
};
const BG_2 = {
  imgUrl: 'https://i.postimg.cc/4xLDYVbB/14904338619-e4ed845776-b.jpg',
  bgStyle: 'background-repeat: no-repeat;'
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/ryasan86/';
const GITHUB_URL = 'https://github.com/ryasan86';
const CODEPEN_URL = 'https://codepen.io/ryasan86/';


export { BG_1, BG_2, SECTIONS, LINKEDIN_URL, GITHUB_URL, CODEPEN_URL, };
