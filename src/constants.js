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

const BG = {
  bg: 'https://i.postimg.cc/8PQ3WSd8/codeBG3.png',
  desktopStyles: `background-repeat: repeat;
                  background-position: left center`,
  mobileStyles: `background-repeat: repeat;
                 background-size: contain;`
};
const BG_2 = {
  bg: 'https://i.postimg.cc/FRkXXJ7D/webdev.png',
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

export { BG, BG_2, SECTIONS, PORTFOLIO_REPO, GLITCH_BG, PROJECT_TYPES };
