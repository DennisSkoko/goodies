import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme, as }) => theme.font[as].size};
  font-weight: normal;
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  margin-bottom: 0;
`

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  centered: PropTypes.bool
}

Heading.defaultProps = {
  as: 'h1',
  centered: false
}

export default Heading
