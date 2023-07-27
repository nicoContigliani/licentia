'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LicencePays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LicenceId: {
        type: Sequelize.BIGINT
      },
      PayId: {
        type: Sequelize.BIGINT
      },
      Payment_Date: {
        type: Sequelize.DATE
      },
      LicencePayJwt: {
        type: Sequelize.STRING
      },
      LicencePay_Allowed: {
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
    await queryInterface.dropTable('LicencePays');
  }
};