import { darken, lighten } from 'polished'

const color = {
  primary: darken(0.1, 'palevioletred'),
  accent: darken(0.2, 'papayawhip'),
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8'
}

const theme = {
  border: {
    size: {
      thin: '0.0625rem',
      normal: '0.125rem',
      thick: '0.25rem'
    }
  },

  color: {
    primary: {
      dark: darken(0.2, color.primary),
      base: color.primary,
      light: lighten(0.2, color.primary)
    },

    accent: {
      dark: darken(0.175, color.accent),
      base: color.accent,
      light: lighten(0.175, color.accent)
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
    },

    success: {
      dark: darken(0.1, color.success),
      base: color.success,
      light: lighten(0.1, color.success)
    },

    danger: {
      dark: darken(0.1, color.danger),
      base: color.danger,
      light: lighten(0.1, color.danger)
    },

    warning: {
      dark: darken(0.1, color.warning),
      base: color.warning,
      light: lighten(0.1, color.warning)
    },

    info: {
      dark: darken(0.1, color.info),
      base: color.info,
      light: lighten(0.1, color.info)
    }
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
    small: { size: '0.8rem' }
  },

  grid: {
    maxWidth: '78rem',
    gap: '1rem'
  },

  spacing: {
    xs: '.375rem',
    sm: '.75rem',
    md: '1.5rem',
    lg: '3rem',
    xl: '6rem'
  },

  transition: {
    quick: '150ms',
    normal: '300ms',
    slow: '500ms'
  }
}

export default theme
