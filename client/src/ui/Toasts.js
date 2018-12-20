import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import useToast from '../hooks/useToast'
import Heading from './Heading'
import Text from './Text'

const slideIn = keyframes`
  from { right: -120% }
  to { right: 0 }
`

const slideOut = keyframes`
  from { right: 0 }
  to { right: -120% }
`

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  right: ${({ theme }) => theme.spacing.md};
  bottom: ${({ theme }) => theme.spacing.md};
`

const Toast = styled.div`
  position: relative;
  max-width: 28rem;
  border-bottom: ${({ theme, status }) =>
    `${theme.border.size.thick} solid ${theme.color[status || 'primary'].dark}`};
  background-color: ${({ theme, status }) => theme.color[status || 'primary'].base};
  margin-top: ${({ theme }) => theme.spacing.sm};
  animation: ${({ theme }) => css`${slideIn} ${theme.transition.slow}`};
  padding: ${({ theme }) => `${theme.spacing.sm}`};

  &:first-child {
    margin-top: 0;
  }

  ${({ theme, isDisappearing }) => isDisappearing && css`
    animation: ${css`${slideOut} ${theme.transition.normal}`}
  `}
`

const Content = styled(Text).attrs({ marginBottom: false })`
  color: ${({ theme }) => theme.color.white.light};
`

function Toasts () {
  const { toast } = useToast()

  if (!toast) return null

  const { status, title, content, isDisappearing } = toast

  return (
    <Wrapper>
      <Toast status={status} isDisappearing={isDisappearing}>
        <Heading as='h6' inverted>{title}</Heading>
        <Content status={status}>{content}</Content>
      </Toast>
    </Wrapper>
  )
}

export default Toasts
