import styled from 'styled-components'

const Container = styled.div`
  max-width: ${({ theme }) => theme.grid.maxWidth};
  padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
  margin: 0 auto;
`

export default Container
