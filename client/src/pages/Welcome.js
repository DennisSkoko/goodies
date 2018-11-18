import React from 'react'
import styled from 'styled-components'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

const Box = styled.div`
  height: 50px;
  background-color: ${({ color, type, theme }) => theme.color[color][type]};
`

function Welcome () {
  return (
    <section>
      <Heading>Heading 1</Heading>
      <Heading as='h2'>Heading 2</Heading>
      <Heading as='h3'>Heading 3</Heading>
      <Heading as='h4'>Heading 4</Heading>
      <Heading as='h5'>Heading 5</Heading>
      <Heading as='h6'>Heading 6</Heading>
      <Text type='lead'>Some leading text</Text>
      <Text>Some basic body text</Text>
      <Text type='small'>Some small text</Text>
      <Box color='primary' type='dark' />
      <Box color='primary' type='base' />
      <Box color='primary' type='light' />
      <Box color='accent' type='dark' />
      <Box color='accent' type='base' />
      <Box color='accent' type='light' />
      <Box color='black' type='dark' />
      <Box color='black' type='base' />
      <Box color='black' type='light' />
      <Box color='white' type='dark' />
      <Box color='white' type='base' />
      <Box color='white' type='light' />
    </section>
  )
}

export default Welcome
