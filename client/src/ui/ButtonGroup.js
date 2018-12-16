import styled from 'styled-components'

const ButtonGroup = styled.div`
  & > * {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }

  & > *:last-child {
    margin-right: 0;
  }
`

export default ButtonGroup
