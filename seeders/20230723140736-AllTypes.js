'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AllTypes', [
      { Type_Name: 'Enterprise', Description: 'Enterprise user', createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'Branch', Description: 'Branch user', createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'User', Description: 'Regular user', createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AllTypes', null, {});
  }
};