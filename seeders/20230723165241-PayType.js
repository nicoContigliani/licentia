'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PayTypes', [
      { Type_Name: 'Credit Card', Description: 'Payment with credit card', createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'Bank Transfer', Description: 'Payment via bank transfer', createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PayTypes', null, {});
  }
};