/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid'

export const gamesData = [
  {
    id: uuidv4(),
    title: 'Sludge Runners (in development)',
    description: 'A platformer game built with Kaplay.',
    url: 'https://floor-is-lava-lyart.vercel.app/',
    tags: ['kaplay'],
  },
  {
    id: uuidv4(),
    title: 'Battleship',
    description: 'A recreation of the classic game Battleship.',
    url: 'https://battleship-lyart-zeta.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Collaborative Grid',
    description: 'A shareable collaborative grid for creating simple pixel art.',
    url: 'https://pixel-art-rosy-tau.vercel.app',
    tags: ['nextjs', 'partykit', 'tailwind'],
  },
  {
    id: uuidv4(),
    title: 'Adventure Time CYOA',
    description: 'Adventure time is a text-based choose your own adventure simulator that leverages Gemini Generative AI to craft a compelling custom adventure in the world of your choosing!',
    url: 'https://adventure-time-cyoa.vercel.app/',
    tags: ['astro', 'gemini ai'],
  },
]
