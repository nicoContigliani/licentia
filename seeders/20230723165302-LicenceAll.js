'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LicenceAlls', [
      { LicenceId: 1, AllId: 1, LicenceAllJwt: "$gato", LicenceAll_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { LicenceId: 2, AllId: 2, LicenceAllJwt: "$gato", LicenceAll_Allowed: true, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LicenceAlls', null, {});
  }
};