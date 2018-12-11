import styled from 'styled-components'

const PageHeader = styled.header`
  padding: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.sm}`};
  border-bottom: ${({ theme }) => `.125rem solid ${theme.color.primary.dark}`};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export default PageHeader
