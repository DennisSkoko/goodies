import React from 'react'
import Heading from '../ui/Heading'
import Jumbotron from '../ui/Jumbotron'
import Text from '../ui/Text'

function Welcome () {
  return (
    <Jumbotron>
      <Heading>Welcome to the tasty side!</Heading>
      <Text>
        This is a place for people who likes to make good food, to join a
        community where people can share their recipes together. You can share
        something that you've learned from your parents, something cool that
        you accidentally did or something that you saw on Youtube.
      </Text>
    </Jumbotron>
  )
}

export default Welcome
