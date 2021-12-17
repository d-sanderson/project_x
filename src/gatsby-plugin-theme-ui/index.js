export default {
  colors: {
    text: 'rgb(240, 245, 250)',
    background: '#222639',
    primary: '#53B3CB',
    secondary: '#ff6347',
    accent: '#E5FFF0',
    toggleColor: '#F5F3CE',

    modes: {
      dark: {
        text: '#222639',
        background: '#e2e8f0',
        primary: '#0cf',
        accent: '#222639',
        toggleColor: '#F28C38',
      },
    },
  },
  styles: {
    a: {
      fontFamily: "'Anonymous Pro', sans-serif",
      fontWeight: '700',
      textDecoration: 'none',
      color: '#fff',
    },
  },
  borders: {
    solid: '1px #fff',
  },
  fonts: {
    body: "'Anonymous Pro', monospace",
    heading: "'Jost', sans-serif",
  },
  fontWeights: {
    body: 800,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.7,
    heading: 1.125,
  },
  images: {
    avatar: {
      width: 96,
      height: 96,
      borderRadius: 99999,
    },
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'accent',
    },
    outline: {
      color: 'accent',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  links: {
    primary: {
      color: '#ee99ff',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        color: 'text',
      },
      fontFamily: "'Anonymous Pro', monospace",
    },
    secondary: {
      color: 'background',
      bg: '#ee99ff',
      fontFamily: "'Anonymous Pro', monospace",
      '&:hover': {
        color: 'text',
      },
    },
  },
  heading: {
    fontFamily: "'Anonymous Pro', monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}
