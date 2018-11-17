import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.font.family}
  font-size: ${({ theme, as }) => theme.font[as].size}
`

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

Heading.defaultProps = {
  as: 'h1'
}

export default Heading
