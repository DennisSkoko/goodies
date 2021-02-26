import { Context } from 'aws-lambda'
import { Recipe } from '../../database/recipe.types'

type EventGetRecipe = {
  action: 'get',
  props: {
    id: string
  }
}

export type EventListRecipes = {
  action: 'list',
  props: {}
}

type EventCreateRecipe = {
  action: 'create',
  props: {
    recipe: {
      name: string
    }
  }
}

export type HandlerResult<Event> =
  Event extends EventGetRecipe ? Recipe :
  Event extends EventListRecipes ? Recipe[] :
  Event extends EventCreateRecipe ? Recipe :
  never

export type HandlerEvent = EventGetRecipe | EventListRecipes | EventCreateRecipe

export type Handler = (event: HandlerEvent, context: Context) =>
  Promise<HandlerResult<HandlerEvent>>
