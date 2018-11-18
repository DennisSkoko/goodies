import React from 'react'
import FullPageMessage from '../ui/FullPageMessage'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

function NotFound () {
  return (
    <FullPageMessage>
      <Heading centered marginTop>Page not found (;-;)</Heading>
      <Text centered>Sorry but I couldn't find the page you were looking for.</Text>
    </FullPageMessage>
  )
}

export default NotFound
