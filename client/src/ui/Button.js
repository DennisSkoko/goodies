import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { transitions } from 'polished'

const Button = styled.button`
  background-color: transparent;
  border: 1px solid;
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.font.family.body};
  margin: ${({ theme, margin }) => margin && `${theme.spacing.xs}`};
  text-decoration: none;

  ${({ theme }) => transitions(['background-color', 'color'], theme.transition.normal)}

  ${({ theme, compact }) => compact && css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.font.small.size};
  `}

  ${({ theme, compact }) => !compact && css`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.font.body.size};
  `}

  ${({ theme, inverted }) => inverted && css`
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

  ${({ theme, inverted }) => !inverted && css`
    border-color: ${theme.color.primary.base};
    color: ${theme.color.primary.base};

    &:hover {
      background-color: ${theme.color.primary.light};
      color: ${theme.color.white.light};
    }

    &:active {
      background-color: ${theme.color.primary.base};
      transition: none;
    }
  `}
`

Button.propTypes = {
  margin: PropTypes.bool,
  compact: PropTypes.bool,
  inverted: PropTypes.bool
}

Button.defaultProps = {
  margin: true,
  compact: false,
  inverted: false
}

export default Button
