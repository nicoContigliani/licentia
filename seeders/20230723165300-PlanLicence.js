'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PlanLicences', [
      { LicenceID: 1, BillingPlanLicenceID: 1, PlanLicenceJwt: 'jwt-token-plan-licence-1', PlanLicence_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { LicenceID: 2, BillingPlanLicenceID: 2, PlanLicenceJwt: 'jwt-token-plan-licence-2', PlanLicence_Allowed: true, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlanLicences', null, {});
  }
};