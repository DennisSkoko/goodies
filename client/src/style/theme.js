import { darken, lighten } from 'polished'

const color = {
  primary: 'palevioletred',
  accent: 'papayawhip'
}

const theme = {
  color: {
    primary: {
      dark: darken(0.1, color.primary),
      base: color.primary,
      light: lighten(0.1, color.primary)
    },

    accent: {
      dark: darken(0.1, color.primary),
      base: color.accent,
      light: lighten(0.1, color.primary)
    },

    black: {
      dark: '#000',
      base: '#222',
      light: '#444'
    },

    white: {
      dark: '#bbb',
      base: '#ddd',
      light: '#fff'
    }
  },

  spacing: {
    xs: '.375rem',
    s: '.75rem',
    m: '1.5rem',
    l: '3rem',
    xl: '6rem'
  },

  font: {
    family: 'sans-serif',
    baseSize: '1.1rem',

    h1: { size: '2.5rem' },
    h2: { size: '2rem' },
    h3: { size: '1.75rem' },
    h4: { size: '1.5rem' },
    h5: { size: '1.25rem' },
    h6: { size: '1.15rem' },
    lead: { size: '1.25rem' },
    body: { size: '1rem' },
    small: { size: '0.75rem' }
  },

  transition: {
    quick: '150ms',
    normal: '300ms',
    slow: '500ms'
  }
}

export default theme
