'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
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
        allowNull: false
      },

      created: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  ]),

  down: queryInterface => Promise.all([
    queryInterface.dropTable('users')
  ])
}
