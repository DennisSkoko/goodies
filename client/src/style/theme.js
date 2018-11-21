import { darken, lighten } from 'polished'

const color = {
  primary: darken(0.1, 'palevioletred'),
  accent: darken(0.2, 'papayawhip')
}

const theme = {
  color: {
    primary: {
      dark: darken(0.1, color.primary),
      base: color.primary,
      light: lighten(0.1, color.primary)
    },

    accent: {
      dark: darken(0.1, color.accent),
      base: color.accent,
      light: lighten(0.1, color.accent)
    },

    black: {
      dark: '#000',
      base: '#222',
      light: '#444'
    },

    white: {
      dark: '#ddd',
      base: '#eee',
      light: '#fff'
    }
  },

  spacing: {
    xs: '.375rem',
    sm: '.75rem',
    md: '1.5rem',
    lg: '3rem',
    xl: '6rem'
  },

  font: {
    baseSize: '1.1rem',

    family: {
      heading: '\'Acme\', sans-serif',
      body: '\'Montserrat\', sans-serif'
    },

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
  },

  container: {
    maxWidth: '1248px'
  },

  grid: {
  }
}

export default theme
