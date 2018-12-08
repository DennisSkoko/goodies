import styled from 'styled-components'

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
  margin: 0 auto;
`

export default Container
