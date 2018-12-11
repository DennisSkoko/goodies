import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from 'styled-components'
import Card from '../ui/Card'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

function RecipeListItem ({ recipe }) {
  return (
    <li>
      <Card as='a' href='#/browse'>
        <TitleWrapper>
          <div>
            <Heading as='h3' marginBottom={false}>{recipe.name}</Heading>
            <Text type='small'>
              Created by {recipe.creator.name}
            </Text>
          </div>

          <div>
            <Text marginBottom={false} type='small'>
              Last updated {moment(parseInt(recipe.updated || recipe.created)).fromNow()}
            </Text>
          </div>
        </TitleWrapper>

        <Text marginBottom={false}>{recipe.description}</Text>
      </Card>
    </li>
  )
}

RecipeListItem.propTypes = {
  recipe: PropTypes
    .shape({
      id: PropTypes.string.isRequired,
      creator: PropTypes
        .shape({
          name: PropTypes.string.isRequired
        })
        .isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      updated: PropTypes.string,
      created: PropTypes.string.isRequired
    })
    .isRequired
}

export default RecipeListItem
