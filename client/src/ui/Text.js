import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.p`
  font-family: ${({ theme }) => theme.font.family.body};
  font-size: ${({ theme, type }) => theme.font[type].size};
  color: ${({ theme, inverted }) => theme.color[inverted ? 'white' : 'black'].base};
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  margin-top: ${({ marginTop }) => marginTop ? '1rem' : '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom ? '1rem' : '0'};
`

Text.propTypes = {
  type: PropTypes.oneOf(['lead', 'body', 'small']),
  centered: PropTypes.bool,
  marginTop: PropTypes.bool,
  marginBottom: PropTypes.bool,
  inverted: PropTypes.bool
}

Text.defaultProps = {
  type: 'body',
  centered: false,
  marginTop: false,
  marginBottom: true,
  inverted: false
}

export default Text
