import styled, { css } from 'styled-components'
import { transitions } from 'polished'

const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => `${theme.spacing.md} 0`};
  background-color: ${({ theme }) => theme.color.accent.light};
  display: block;

  ${({ theme, to, href }) => (to || href) && css`
    border: .125rem solid ${theme.color.accent.light};
    text-decoration: none;
    outline: none;
    ${transitions('border-color', theme.transition.normal)};

    &:hover, &:focus {
      border-color: ${theme.color.primary.light};
    }
  `}
`

export default Card
