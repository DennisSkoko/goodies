export type Recipe = {
  id: string,
  name: string
}

export type RecipeGetParams = { id: string }

export type RecipeListParams = {}

export type RecipeCreateParams = { name: string }
