import styled from 'styled-components'
import PropTypes from 'prop-types'

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
`

Grid.propTypes = {
  columns: PropTypes.number
}

Grid.defaultProps = {
  columns: 12
}

export default Grid
