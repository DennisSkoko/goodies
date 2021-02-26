'use strict'

// process.env.AWS_PROFILE = 'privat'
// process.env.AWS_REGION = 'eu-central-1'
// process.env.GOODIES_DB_SECRET_ARN = 'arn:aws:secretsmanager:eu-central-1:221138823275:secret:DatabaseSecret3B817195-Q0wtem6x8UoV-Cek5vh'

const getDatabase = require('../../database/getDatabase')
const database = require('../../database')

/**
 * @typedef {import('./manager.types').HandlerEvent} HandlerEvent
 */

/**
 * @template {HandlerEvent} Event
 * @typedef {import('./manager.types').HandlerResult<Event>} HandlerResult
 */

/**
 * @template {HandlerEvent} Event
 * @param {import('./manager.types').HandlerEvent} event
 * @param {import('aws-lambda').Context} context
 * @param {import('aws-lambda').Callback} callback
 * @returns {Promise<HandlerResult<Event>>}
 */
async function manager(event, context, callback) {
  // Tell AWS to not wait for empty loops otherwise our connection to the
  // database will prevent the Lambda from closing otherwise.
  // context.callbackWaitsForEmptyEventLoop = false

  try {
    switch (event.action) {
      case 'get':
        return /** @type {HandlerResult<Event>} */ (await database.recipe.get(event.props))
      case 'list':
        return /** @type {HandlerResult<Event>} */ (await database.recipe.list({}))
      case 'create':
        return /** @type {HandlerResult<Event>} */ (await database.recipe.create(event.props.recipe))
      default:
        throw new Error(`Unsupported event given '${event}'`)
    }
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    const db = await getDatabase()
    await db.destroy()
  }
}

module.exports = manager

// manager({ action: 'list', props: {} }, {}, console.log)
