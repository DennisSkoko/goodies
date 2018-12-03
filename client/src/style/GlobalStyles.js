import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.font.baseSize};
  }
`

export default GlobalStyles
