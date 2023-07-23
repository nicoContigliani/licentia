'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GeneralTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LicenceId: {
        type: Sequelize.BIGINT
      },
      Token_Value: {
        type: Sequelize.STRING
      },
      Expiration_Date: {
        type: Sequelize.DATE
      },
      Revoked: {
        type: Sequelize.BOOLEAN
      },
      Revoked_At: {
        type: Sequelize.DATE
      },
      IP_Address: {
        type: Sequelize.STRING
      },
      customer: {
        type: Sequelize.STRING
      },
      messages: {
        type: Sequelize.STRING
      },
      alerts: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('GeneralTokens');
  }
};