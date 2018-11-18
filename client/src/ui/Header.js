import styled from 'styled-components'

const Header = styled.header`
  background-color: ${({ theme }) => theme.color.primary.base};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.sm}`};
`

export default Header
