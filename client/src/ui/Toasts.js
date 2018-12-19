import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import useToasts from '../hooks/useToasts'
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
  border: ${({ theme, status }) => `.125rem solid ${theme.color[status || 'primary'].base}`};
  background-color: ${({ theme, status }) => theme.color[status || 'primary'].base};
  margin-top: ${({ theme }) => theme.spacing.sm};
  animation: ${({ theme }) => css`${slideIn} ${theme.transition.slow}`};

  &:first-child {
    margin-top: 0;
  }

  ${({ theme, isDisappearing }) => isDisappearing && css`
    animation: ${css`${slideOut} ${theme.transition.normal}`}
  `}
`

const Title = styled(Heading).attrs({ as: 'h6', marginBottom: false, inverted: true })`
  padding: ${({ theme }) => `${theme.spacing.xs}`};
`

const Content = styled(Text).attrs({ marginBottom: false })`
  background-color: ${({ theme }) => theme.color.white.light};
  padding: ${({ theme }) => `${theme.spacing.sm}`};
  color: ${({ theme, status }) => theme.color[status || 'primary'].dark};
`

function Toasts () {
  const { toasts } = useToasts()

  return (
    <Wrapper>
      {toasts.map(({ key, status, title, content, isDisappearing }) => (
        <Toast key={key} status={status} isDisappearing={isDisappearing}>
          <Title>{title}</Title>
          <Content status={status}>{content}</Content>
        </Toast>
      ))}
    </Wrapper>
  )
}

export default Toasts
