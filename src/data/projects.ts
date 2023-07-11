/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid'

export const projectsData = [
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
    description: 'I collaborated with the author of the TCM technique create an online implementation of their formula for age estimation of human remains.',
    url: 'https://tcmtechnique.vercel.app/',
    tags: ['gatsby', 'material-ui'],
  },
  {
    id: uuidv4(),
    title: 'Intersections',
    description: 'Collaborated with Vital Spaces and Albert Padilla to create a force-directed node graph representing artists and artwork displayed throughout Santa Fe in the summer of 2021.',
    url: 'https://intersections.vitalspaces.org/',
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
    url: 'http://kindly-note.surge.sh/',
    repo: 'https://github.com/d-sanderson/under-construction-activatenm', // if no repo, the button will not show up
    tags: ['Gatsby', 'gatsby themes'],
  },
  {
    id: uuidv4(),
    title: 'Activate New Mexico',
    description:
      "Activate New Mexico (ActivateNM) is an Albuquerque-based start-up incubator/accelerator powered by CNM Ingenuity. During my tenure as Resident Web Developer, I collaborated with Ruth Dove(Project Manager) and Adrian Tsosie(Graphic Designer) to redesign, rebrand, and revamp Activate NM's online presence with a new website built using WordPress.",
    url: 'https://activatenm.com/',
    repo: '', // if no repo, the button will not show up
    tags: ['WordPress', 'Genesis'],
  },
  {
    id: uuidv4(),
    title: 'Little Lions Learn',
    description:
      'Little Lions Learn is an online language learning company that delivers high-quality, immersive second language instruction in Spanish and English for children between the ages of 4 and 13. I built this site as part of my residency at the start-up accelerator, ActivateNM. The site uses WordPress, the Genesis Framework and is integrated with Hubspot and WooCommerce.',
    url: 'https://littlelionslearn.com',
    repo: '', // if no repo, the button will not show up
    tags: ['Genesis', 'WordPress', 'Hubspot', 'WooCommerce'],
  },
]
