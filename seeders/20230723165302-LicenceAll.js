'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LicenceAlls', [
      { LicenceID: 1, AllID: 1, createdAt: new Date(), updatedAt: new Date() },
      { LicenceID: 2, AllID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LicenceAlls', null, {});
  }
};