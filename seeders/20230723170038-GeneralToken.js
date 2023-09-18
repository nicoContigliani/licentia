'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GeneralTokens', [
      { LicenceId: 1, Token_Value: 'token-value-1', Expiration_Date: new Date(), Revoked: false, Revoked_At: null, IP_Address: '127.0.0.1', customer: 'customer1', messages: 'messages1', alerts: 'alerts1', createdAt: new Date(), updatedAt: new Date() },
      { LicenceId: 2, Token_Value: 'token-value-2', Expiration_Date: new Date(), Revoked: false, Revoked_At: null, IP_Address: '192.168.1.1', customer: 'customer2', messages: 'messages2', alerts: 'alerts2', createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GeneralTokens', null, {});
  }
};