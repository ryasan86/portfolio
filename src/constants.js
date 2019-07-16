const projects = [
  {
    title: 'NotPinterest',
    img: 'https://i.postimg.cc/s2T4F9Ck/notpinterest.jpg',
    url: 'https://notpinterest-next-prod.herokuapp.com',
    tools: ['React', 'GraphQL', 'MongoDB'],
    description: 'Pinterest-like clone',
    type: 'Full Stack',
  },
  {
    title: 'Sick Fits',
    img: 'https://i.postimg.cc/BncCpfYQ/sickfits.jpg',
    url: 'https://sick-fits-next-prod-rs.herokuapp.com',
    tools: ['React', 'GraphQL', 'NextJS', 'Prisma'],
    description:
      'Ecommerce application complete with authentication, search autocomplete, and Stripe checkout',
    type: 'Full Stack',
  },
  {
    title: '100 Days CSS Challenge',
    img: 'https://i.postimg.cc/BQFp8K2F/100-days-css.jpg',
    url: 'https://ryasan86.github.io/100_days_css',
    tools: ['React', 'Codepen Embed', 'Styled-Components'],
    description: 'A collection of 100 CSS builds over the course of 100 days',
    type: 'Front-End',
  },
  {
    title: 'Simon Says',
    img: 'https://i.postimg.cc/3xHB2xZc/simon.jpg',
    url: 'https://ryasan86.github.io/simon',
    tools: ['React', 'Redux', 'Styled-Components'],
    description: 'Data flow management with async functions',
    type: 'Game',
  },
  {
    title: 'Mars Rovers Image Browser',
    img: 'https://i.postimg.cc/ZqbxDs2P/mars-rovers.jpg',
    url: 'http://ryasan86.github.io/mars_rovers',
    tools: ['React', 'Redux'],
    description: 'Check out photos taken from the 3 rovers on Mars',
    type: 'Front-End',
  },
];

const socials = [
  {
    name: 'github',
    url: 'https://github.com/ryasan86',
  },
  {
    name: 'codepen',
    url: 'https://codepen.io/ryasan86/',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ryasan86/',
  },
];

const skills = [
  { HTML5: 90 },
  { 'CSS / SASS': 90 },
  { ReactJS: 90 },
  { NodeJS: 70 },
  { SQL: 60 },
  { 'Angular2+': 75 },
  { 'Rest API': 75 },
  { GraphQL: 65 },
];

const loaderDelay = 1000;
const portfolioRepo = 'https://github.com/ryasan86/portfolio';

export { projects, socials, skills, portfolioRepo, loaderDelay };
