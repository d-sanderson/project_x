/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid'

export const projectsData = [
  {
    id: uuidv4(),
    title: 'Adventure Time CYOA',
    description: 'Adventure time is a choose your own adventure simulator that leverages Gemini Generative AI to craft a compelling custom adventure in the world of your choosing!',
    url: 'https://adventure-time-cyoa.vercel.app/',
    tags: ['astro', 'gemini ai'],
  },
  {
    id: uuidv4(),
    title: 'Meow Wolf Credits Site',
    description: '',
    url: 'https://credits.meowwolf.com/',
    tags: ['gatsby', 'airtable', 'tailwind'],
  },
  {
    id: uuidv4(),
    title: 'TCM Technique',
    description: 'I collaborated with the author of the TCM technique to create an online implementation of their formula for age estimation of human remains.',
    url: 'https://tcmtechnique.vercel.app/',
    tags: ['gatsby', 'material-ui'],
  },
  {
    id: uuidv4(),
    title: 'Intersections',
    description: 'Collaborated with non-profit <a href="https://www.vitalspaces.org" target="blank">Vital Spaces</a> and Albert Padilla to create an interactive force-directed node graph representing artists and artwork displayed throughout Santa Fe in the summer of 2021.',
    url: 'https://web.archive.org/web/20231021191156/https://intersections.vitalspaces.org/',
    repo: 'https://github.com/imbrikis/intersections', // if no repo, the button will not show up
    tags: ['d3', 'react', 'tailwind', 'airtable'],
  },
  {
    id: uuidv4(),
    title: 'Meow Wolf Credits Site proof of concept',
    description: 'Prototype of the meow wolf credits site',
    url: 'https://mew-two.vercel.app',
    tags: ['airtable', 'nextjs', 'tailwind'],
  },
  {
    id: uuidv4(),
    title: 'Jamie Burnes Sculpture',
    description: '',
    url: 'https://jamieburnes.com/',
    tags: ['gatsby', 'tailwindcss', 'netlify-cms'],
  },
  {
    id: uuidv4(),
    title: 'Mortgage Website Generator ',
    description: 'I built a site that generated web pages for Mortgage Officers based on information queried from Microsoft Sharepoint',
    tags: ['gatsby', 'tailwindcss', 'sharepoint'],
  },
  {
    id: uuidv4(),
    title: 'Simons Firm',
    description: '',
    url: 'https://simonsfirm.com/',
    tags: ['gatsby', 'tailwindcss', 'netlify-cms'],
  },
  {
    id: uuidv4(),
    title: 'RAS Materials',
    description: '',
    url: 'https://rasmaterialsllc.com/',
    tags: ['gatsby', 'formik', 'netlify-cms'],
  },
  {
    id: uuidv4(),
    title: 'precision',
    description:
      'A Webscaper that will scrape PR Newswire for Press Releases related to certain keywords',
    repo: 'https://github.com/d-sanderson/precision', // if no repo, the button will not show up
    tags: ['puppeteer', 'node'],
  },
  {
    id: uuidv4(),
    title: 'whereto react',
    description:
      'This application provides users with travel distance and duration data based their origin, destination, and method of travel. Each trip query is saved to a database and rendered back to the user and they are presented with a list of previously searched locations.',
    repo: 'https://github.com/d-sanderson/whereto-react', // if no repo, the button will not show up
    tags: ['create-react-app', 'google-maps-api', 'mongoose'],
  },
  {
    id: uuidv4(),
    title: 'gatsby-source-pokemons',
    description:
      'Source plugin for pulling pokemon data into your Gatsby project.',
    url: 'http://pokemons-source-example.surge.sh/',
    repo: 'https://github.com/d-sanderson/gatsby-source-pokemons', // if no repo, the button will not show up
    tags: ['Gatsby', 'GraphQL', 'Tailwindcss'],
  },
  {
    id: uuidv4(),
    title: 'Activate New Mexico Landing Page',
    description:
      'Landing page for forthcoming Activate NM website. The landing page was built using GatsbyJS and React ParticlesJS. The final site is being built in WordPress.',
    repo: 'https://github.com/d-sanderson/under-construction-activatenm', // if no repo, the button will not show up
    tags: ['Gatsby', 'gatsby themes'],
  },
]
