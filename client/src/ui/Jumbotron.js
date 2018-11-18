import PropTypes from 'prop-types'
import styled from 'styled-components'

const Jumbotron = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`}
  color: ${({ theme }) => theme.color.white.light};
  background-color: ${({ theme }) => theme.color.accent.base};
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.color.accent.base},
    ${({ theme }) => theme.color.primary.base}
  );
`

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired
}

export default Jumbotron
