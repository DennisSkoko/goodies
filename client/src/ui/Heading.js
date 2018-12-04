import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme, as }) => theme.font[as].size};
  font-weight: normal;
  color: ${({ theme, inverted }) => inverted
    ? theme.color.white.light
    : theme.color.primary.dark};
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  margin-top: ${({ marginTop }) => marginTop ? '1rem' : '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom ? '.5rem' : '0'};
`

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  centered: PropTypes.bool,
  marginTop: PropTypes.bool,
  marginBottom: PropTypes.bool,
  inverted: PropTypes.bool
}

Heading.defaultProps = {
  as: 'h1',
  centered: false,
  marginTop: false,
  marginBottom: true,
  inverted: false
}

export default Heading
