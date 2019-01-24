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


const BG_1 = 'https://i.postimg.cc/PxgRDwKD/codeBG.png';
const BG_2 = 'https://via.placeholder.com/1366x768';

export { BG_1, BG_2, SECTIONS };
