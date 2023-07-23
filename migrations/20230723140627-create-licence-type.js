'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LicenceTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Type_Name: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Max_Duration: {
        type: Sequelize.BIGINT
      },
      Premium_Support: {
        type: Sequelize.BOOLEAN
      },
      Users_Included: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('LicenceTypes');
  }
};