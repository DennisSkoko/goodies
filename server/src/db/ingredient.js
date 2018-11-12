'use strict'

const Sequelize = require('sequelize')
const database = require('../database')

module.exports = database.define(
  'ingredient',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },

    recipe: {
      type: Sequelize.UUID,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
