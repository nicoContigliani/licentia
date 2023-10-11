'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Modules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Module_Name: {
        type: Sequelize.STRING
      },
      Module_Description: {
        type: Sequelize.STRING
      },
      Module_TypeID: {
        type: Sequelize.BIGINT
      },
      Module_Allowed: {
        type: Sequelize.BOOLEAN
      },
      Module_Free: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Modules');
  }
};