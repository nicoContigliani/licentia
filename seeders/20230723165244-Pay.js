'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pays', [
      { PayTypeID: 1, Amount: 100.0, Payment_Date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { PayTypeID: 2, Amount: 50.0, Payment_Date: new Date(), createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pays', null, {});
  }
};