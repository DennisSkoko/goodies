'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },

      creator: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
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
        allowNull: false
      }
    })

    await queryInterface.createTable('ingredients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },

      recipe: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'id'
        }
      },

      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    })

    await queryInterface.createTable('steps', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },

      recipe: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'id'
        }
      },

      instructions: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('steps')
    await queryInterface.dropTable('ingredients')
    await queryInterface.dropTable('recipes')
  }
}
