'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AllTypes', [
      { Type_Name: 'Type 1', Description: 'Description for Type 1', createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'Type 2', Description: 'Description for Type 2', createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AllTypes', null, {});
  }
};