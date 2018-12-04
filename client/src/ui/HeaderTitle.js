import styled from 'styled-components'
import Heading from './Heading'

const HeaderTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.font.h1.size};
  color: ${({ theme }) => theme.color.white.light};
  margin: 0;
`

export default HeaderTitle
