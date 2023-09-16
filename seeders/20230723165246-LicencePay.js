'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LicencePays', [
      { LicenceId: 1, PayId: 1, Payment_Date: new Date(), LicencePayJwt: 'jwt-token-licence-pay-1', LicencePay_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { LicenceId: 2, PayId: 2, Payment_Date: new Date(), LicencePayJwt: 'jwt-token-licence-pay-2', LicencePay_Allowed: true, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LicencePays', null, {});
  }
};