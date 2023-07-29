'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LicenceModules', [
      { LicenceId: 1, ModuleId: 1, licenceModuleJwt: 'jwt-token-licence-module-1', licenceModule_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { LicenceId: 2, ModuleId: 2, licenceModuleJwt: 'jwt-token-licence-module-2', licenceModule_Allowed: true, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LicenceModules', null, {});
  }
};