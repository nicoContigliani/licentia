'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Licences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Licence_Name: {
        type: Sequelize.STRING
      },
      Start_Date: {
        type: Sequelize.DATE
      },
      End_Date: {
        type: Sequelize.DATE
      },
      Licence_TypeID: {
        type: Sequelize.BIGINT
      },
      Billing_Plan_LicenceID: {
        type: Sequelize.BIGINT
      },
      licenceJWT: {
        type: Sequelize.STRING
      },
      LicenceTypeID: {
        type: Sequelize.BIGINT
      },
      Licence_Allowed: {
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
    await queryInterface.dropTable('Licences');
  }
};