import styled from 'styled-components'

const Header = styled.header`
  background-color: ${({ theme }) => theme.color.primary.base};
  color: ${({ theme }) => theme.color.white.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.m} ${theme.spacing.xs}`};
`

export default Header
