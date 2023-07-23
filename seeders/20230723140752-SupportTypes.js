'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SupportTypes', [
      { Type_Name: 'Basic', Description: 'Basic support', createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'Premium', Description: 'Premium support', createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SupportTypes', null, {});
  }
};