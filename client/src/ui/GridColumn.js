import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const GridColumn = styled.div`
  grid-column-end: span ${({ size }) => size};
  ${({ offset }) => offset && css`
    grid-column-start: ${offset + 1};
  `}
`

GridColumn.propTypes = {
  size: PropTypes.number
}

GridColumn.defaultProps = {
  size: 1,
  offset: null
}

export default GridColumn
