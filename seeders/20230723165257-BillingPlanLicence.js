'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BillingPlanLicences', [
      { BillingPlanId: 1, LicenceId: 1, BillingPlanLicenceJwt: 'jwt-token-billing-plan-licence-1', BillingPlanLicence_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { BillingPlanId: 2, LicenceId: 2, BillingPlanLicenceJwt: 'jwt-token-billing-plan-licence-2', BillingPlanLicence_Allowed: true, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BillingPlanLicences', null, {});
  }
};