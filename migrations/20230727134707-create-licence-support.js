'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LicenceSupports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LicenceId: {
        type: Sequelize.BIGINT
      },
      SupportId: {
        type: Sequelize.BIGINT
      },
      LicenceSupportJwt: {
        type: Sequelize.STRING
      },
      LicenceSupport_Allowed: {
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
    await queryInterface.dropTable('LicenceSupports');
  }
};