import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.p`
  font-family: ${({ theme }) => theme.font.family.body};
  font-size: ${({ theme, type }) => theme.font[type].size};
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  margin-top: 0;
`

Text.propTypes = {
  type: PropTypes.oneOf(['lead', 'body', 'small']),
  centered: PropTypes.bool
}

Text.defaultProps = {
  type: 'body',
  centered: false
}

export default Text
