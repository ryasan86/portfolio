import {
  SickFitsImg,
  MarsBrowserImg,
  JuiceImg,
  SimonImg
} from './assets/images';

const projects = [
  {
    title: 'Sick Fits',
    img: SickFitsImg,
    url: 'https://sick-fits-next-prod-rs.herokuapp.com/',
    tools: ['React', 'GraphQL', 'NextJS', 'Prisma'],
    description:
      'Ecommerce application complete with authentication, search autocomplete, and Stripe checkout',
    type: 'Full Stack'
  },
  {
    title: 'Mars Rovers Image Browser',
    img: MarsBrowserImg,
    url: 'http://ryasan86.github.io/mars_rovers',
    tools: ['React', 'Redux'],
    description: 'Check out photos taken from the 3 rovers on Mars',
    type: 'Full Stack'
  },
  {
    title: 'Simon Says',
    img: SimonImg,
    url: 'https://ryasan86.github.io/simon',
    tools: ['React', 'Redux', 'Styled-Components'],
    description: 'Data flow management with async functions',
    type: 'Game'
  },
  {
    title: 'Juice Served Here',
    img: JuiceImg,
    url: 'https://ryasan86.github.io/juice_served_here/',
    tools: ['SASS'],
    description: 'Fully responsive UI design using SASS',
    type: 'UI Component'
  }
];

const socials = [
  {
    name: 'github',
    url: 'https://github.com/ryasan86'
  },
  {
    name: 'codepen',
    url: 'https://codepen.io/ryasan86/'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ryasan86/'
  }
];

const skills = [
  { HTML5: 90 },
  { 'CSS / SASS': 90 },
  { ReactJS: 90 },
  { NodeJS: 70 },
  { SQL: 60 },
  { 'Angular2+': 75 },
  { 'Rest API': 75 },
  { GraphQL: 65 }
];

const loaderDelay = 1000;
const portfolioRepo = 'https://github.com/ryasan86/portfolio';

export { projects, socials, skills, portfolioRepo, loaderDelay };
