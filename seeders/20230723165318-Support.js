'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Supports', [
      { Type_Name: 'Support 1', Description: 'Description for Support 1', Support_TypeID: 1, createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'Support 2', Description: 'Description for Support 2', Support_TypeID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Supports', null, {});
  }
};