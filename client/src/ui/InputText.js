import React from 'react'
import styled, { css } from 'styled-components'
import { transitions } from 'polished'
import useToggledState from '../hooks/useToggledState'
import Text from './Text'

const Input = styled.input`
  border: none;
  border-bottom: ${({ theme }) => `.125rem solid ${theme.color.primary.base}`};
  padding: ${({ theme }) => `${theme.spacing.xs}`};
  margin: ${({ theme }) => `${theme.spacing.md} 0`};
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.body};
  font-size: ${({ theme }) => theme.font.body.size};
  color: ${({ theme }) => theme.color.primary.dark};
`

const Label = styled.label`
  display: block;
  position: relative;
`

const LabelText = styled(Text).attrs(({ focused, inputValue }) => ({
  marginBottom: false,
  type: focused || inputValue !== '' ? 'small' : 'body'
}))`
  position: absolute;
  left: ${({ theme }) => theme.spacing.xs};
  top: 50%;
  transform: translateY(-50%);
  vertical-align: middle;
  cursor: text;

  ${({ theme }) => transitions(['top', 'transform', 'font-size'], theme.transition.normal)};

  ${({ theme, focused, inputValue }) => (focused || inputValue !== '') && css`
    top: ${theme.spacing.xs};
    transform: none;
  `}
`

function InputText ({ label, value, ...props }) {
  const [ifFocused, toggleIfFocused] = useToggledState(false)

  return (
    <Label onFocus={toggleIfFocused} onBlur={toggleIfFocused}>
      <LabelText focused={ifFocused} inputValue={value}>{label}</LabelText>
      <Input value={value} {...props} />
    </Label>
  )
}

export default InputText
