import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { transitions } from 'polished'

const HeaderNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white.light};
  font-size: ${({ theme }) => theme.font.lead.size};
  font-family: ${({ theme }) => theme.font.family.heading};
  padding: ${({ theme }) => theme.spacing.sm};
  display: block;
  outline: none;
  text-decoration: none;

  ${({ theme }) => transitions(['color', 'transform'], theme.transition.normal)}

  &:hover, &:focus {
    color: ${({ theme }) => theme.color.accent.light};
  }

  &:active {
    transform: scale(.9);
    transition: none;
  }

  &.active {
    color: ${({ theme }) => theme.color.accent.base};
  }
`

export default HeaderNavLink
