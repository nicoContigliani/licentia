'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BillingPlanLicences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BillingPlanId: {
        type: Sequelize.BIGINT
      },
      LicenceId: {
        type: Sequelize.BIGINT
      },
      BillingPlanLicenceJwt: {
        type: Sequelize.STRING
      },
      BillingPlanLicence_Allowed: {
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
    await queryInterface.dropTable('BillingPlanLicences');
  }
};