import styled from 'styled-components'
import Heading from './Heading'

const HeaderTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.font.h4.size}
`

export default HeaderTitle
