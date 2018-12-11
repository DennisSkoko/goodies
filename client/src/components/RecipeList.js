import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RecipeListItem from './RecipeListItem'

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

function RecipeList ({ recipes }) {
  return (
    <Ul>
      {recipes.map(recipe => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </Ul>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(RecipeListItem.propTypes.recipe)
}

RecipeList.defaultProps = {
  recipes: []
}

export default RecipeList
