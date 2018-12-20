import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { transitions } from 'polished'

const Button = styled.button`
  background-color: transparent;
  border: ${({ theme }) => `${theme.border.size.thin} solid`};
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.body};
  text-decoration: none;
  display: ${({ block }) => block ? 'block' : 'inline-block'};
  width: ${({ block }) => block && '100%'};

  ${({ theme }) => transitions(['background-color', 'color'], theme.transition.normal)}

  ${({ theme, size }) => size === 'small' && css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.font.small.size};
  `}

  ${({ theme, size }) => size === 'medium' && css`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.font.body.size};
  `}

  ${({ theme, color }) => color === 'white' && css`
    border-color: ${theme.color.white.light};
    color: ${theme.color.white.light};

    &:hover {
      background-color: ${theme.color.white.light};
      color: ${theme.color.primary.base};
    }

    &:active {
      background-color: ${theme.color.white.base};
      color: ${theme.color.primary.base};
      transition: none;
    }
  `}

  ${({ theme, color }) => color === 'primary' && css`
    border-color: ${theme.color.primary.base};
    color: ${theme.color.primary.base};

    &:hover {
      background-color: ${theme.color.primary.base};
      color: ${theme.color.white.light};
    }

    &:active {
      background-color: ${theme.color.primary.dark};
      transition: none;
    }
  `}
`

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'white']),
  size: PropTypes.oneOf(['small', 'medium']),
  block: PropTypes.bool
}

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  block: false
}

export default Button
