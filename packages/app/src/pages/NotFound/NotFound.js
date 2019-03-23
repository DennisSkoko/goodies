import React from 'react'
import SectionFullPage from '../../ui/SectionFullPage'
import Heading from '../../ui/Heading'
import Text from '../../ui/Text'

function NotFound () {
  return (
    <SectionFullPage>
      <Heading as='h2' centered>Not Found</Heading>
      <Text type='lead' centered>
        Apologies, I could not find the page you are looking for.
      </Text>
    </SectionFullPage>
  )
}

export default NotFound
