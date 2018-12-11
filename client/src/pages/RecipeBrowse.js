import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import RecipeList from '../components/RecipeList'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import PageHeader from '../ui/PageHeader'

const RECIPE_LIST = gql`
{
  recipes {
    id
    creator {
      name
    }
    name
    description
    updated
    created
  }
}
`

function RecipeBrowse () {
  return (
    <Container>
      <PageHeader>
        <Heading as='h2' marginBottom={false}>Browse Recipes</Heading>
      </PageHeader>

      <Query query={RECIPE_LIST}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return 'Error :('

          return <RecipeList recipes={data.recipes} />
        }}
      </Query>
    </Container>
  )
}

export default RecipeBrowse
