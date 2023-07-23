'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BillingPlanLicences', [
      { BillingPlanID: 1, LicenceID: 1, BillingPlanLicenceJwt: 'jwt-token-billing-plan-licence-1', BillingPlanLicence_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { BillingPlanID: 2, LicenceID: 2, BillingPlanLicenceJwt: 'jwt-token-billing-plan-licence-2', BillingPlanLicence_Allowed: true, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BillingPlanLicences', null, {});
  }
};