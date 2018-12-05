import styled from 'styled-components'

const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => `${theme.spacing.md} 0`};
  background-color: ${({ theme }) => theme.color.accent.light};
`

export default Card
