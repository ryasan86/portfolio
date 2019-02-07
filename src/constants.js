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
  desktopStyles: `background-repeat: repeat;
                  filter: blur(2px);
                  -webkit-filter: blur(2px);`,
  mobileStyles: `background-repeat: repeat;
                 background-size: contain;`
};
const BG_2 = {
  imgUrl: 'https://i.postimg.cc/FRkXXJ7D/webdev.png',
  desktopStyles: 'background-repeat: no-repeat;',
  mobileStyles: `background-repeat: no-repeat;
                 background-size: contain;`
};

const PORTFOLIO_REPO = 'https://github.com/ryasan86/portfolio';
const GLITCH_BG = 'https://i.postimg.cc/7hCRc1FY/coding-1853305-1280.jpg';
const PROJECT_TYPES = [
  { id: 0, title: 'All' },
  { id: 1, title: 'UI Component' },
  { id: 2, title: 'Game' },
  { id: 3, title: 'Full Stack' }
];

export { BG_1, BG_2, SECTIONS, PORTFOLIO_REPO, GLITCH_BG, PROJECT_TYPES };
