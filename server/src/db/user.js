'use strict'

const Sequelize = require('sequelize')
const database = require('../database')

module.exports = database.define(
  'user',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },

    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },

    password: {
      type: Sequelize.STRING(60),
      allowNull: false
    },

    name: {
      type: Sequelize.STRING(75),
      allowNull: false
    },

    suspended: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
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
