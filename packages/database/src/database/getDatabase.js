'use strict'

const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager')
const knex = require('knex')

const secretsManager = new SecretsManagerClient({ apiVersion: '2017-10-17' })

/** @type {Promise<unknown> | null} */
let client = null

/**
 * @returns {Promise<import('./getDatabase.types').DatabaseConfig>}
 */
async function getDatabaseConfig() {
  if (!process.env.GOODIES_DB_SECRET_ARN) {
    throw new Error(
      'Can\'t get the database configuration without the following env'
        + ' variable: `GOODIES_DB_SECRET_ARN`'
    )
  }

  const command = new GetSecretValueCommand({
    SecretId: process.env.GOODIES_DB_SECRET_ARN
  })

  const result = await secretsManager.send(command)

  if (!result.SecretString) {
    throw new Error(
      'Failed to get the database configuration from the specifed ARN in env'
        + ' variable: `GOODIES_DB_SECRET_ARN`'
    )
  }

  return JSON.parse(result.SecretString)
}

/**
 * @returns {Promise<unknown>}
 */
function getDatabase() {
  if (!client) {
    // Saves the promise in case this function is called again before the client
    // has been created
    client = getDatabaseConfig()
      .then(config => knex({
        client: 'mysql',
        connection: {
          host: config.host,
          user: config.username,
          password: config.password,
          database: config.dbname
        }
      }))
  }

  return client
}

module.exports = getDatabase
