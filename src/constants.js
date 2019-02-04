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

export { BG_1, BG_2, SECTIONS, PORTFOLIO_REPO };
