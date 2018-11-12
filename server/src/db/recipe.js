'use strict'

const Sequelize = require('sequelize')
const database = require('../database')

module.exports = database.define(
  'recipe',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },

    creator: {
      type: Sequelize.UUID,
      allowNull: false
    },

    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },

    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    private: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },

    updated: {
      type: Sequelize.DATE
    },

    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
