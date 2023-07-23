'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AllTypes', [
      { Type_Name: 'Enterprise', Description: 'Type for Enterprise', createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'Branch', Description: 'Type for Branch', createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'User', Description: 'Type for User', createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AllTypes', null, {});
  }
};