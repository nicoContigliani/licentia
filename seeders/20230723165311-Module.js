'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Modules', [
      { Module_Name: 'Module 1', Module_Description: 'Description for Module 1', Module_TypeID: 1, createdAt: new Date(), updatedAt: new Date() },
      { Module_Name: 'Module 2', Module_Description: 'Description for Module 2', Module_TypeID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Modules', null, {});
  }
};