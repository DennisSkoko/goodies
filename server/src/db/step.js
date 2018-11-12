'use strict'

const Sequelize = require('sequelize')
const database = require('../database')

module.exports = database.define(
  'step',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },

    recipe: {
      type: Sequelize.UUID,
      primaryKey: true
    },

    instructions: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
