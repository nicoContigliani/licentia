'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LicenceSupports', [
      { LicenceId: 1, SupportId: 1, LicenceSupportJwt: 'jwt-token-licence-support-1', LicenceSupport_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { LicenceId: 2, SupportId: 2, LicenceSupportJwt: 'jwt-token-licence-support-2', LicenceSupport_Allowed: true, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LicenceSupports', null, {});
  }
};