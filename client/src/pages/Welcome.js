import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Heading from '../ui/Heading'
import Jumbotron from '../ui/Jumbotron'
import Text from '../ui/Text'

function Welcome () {
  return (
    <Jumbotron>
      <Heading as='h2' inverted>Welcome to the tasty side!</Heading>
      <Text type='lead' inverted>
        This is a place for people who likes to make good food, to join a
        community where people can share their recipes together. You can share
        something that you've learned from your parents, something cool that
        you accidentally did or something that you saw on Youtube.
      </Text>
      <Button as={Link} to='/recipe/browse' inverted>Browse recipes</Button>
      <Button as={Link} to='/recipe/create' inverted>Create recipe</Button>
    </Jumbotron>
  )
}

export default Welcome
