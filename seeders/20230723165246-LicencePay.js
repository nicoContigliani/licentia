'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LicencePays', [
      { LicenceID: 1, PayID: 1, Payment_Date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { LicenceID: 2, PayID: 2, Payment_Date: new Date(), createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LicencePays', null, {});
  }
};