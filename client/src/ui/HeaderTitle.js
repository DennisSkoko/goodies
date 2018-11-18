import styled from 'styled-components'
import Heading from './Heading'

const HeaderTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.font.h3.size};
  margin: 0;
`

export default HeaderTitle
