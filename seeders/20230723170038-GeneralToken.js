'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GeneralTokens', [
      { LicenceId: 1, Token_Value: 'jwt-token-general-1', Expiration_Date: new Date(), Revoked: false, Revoked_At: null, IP_Address: '192.168.1.1', customer: 'Customer 1', messages: 'Message 1', alerts: 'Alert 1', createdAt: new Date(), updatedAt: new Date() },
      { LicenceId: 2, Token_Value: 'jwt-token-general-2', Expiration_Date: new Date(), Revoked: false, Revoked_At: null, IP_Address: '192.168.1.2', customer: 'Customer 2', messages: 'Message 2', alerts: 'Alert 2', createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GeneralTokens', null, {});
  }
};