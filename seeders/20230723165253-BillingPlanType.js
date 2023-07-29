'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BillingPlanTypes', [
      { BillingPlanType_Name: 'BillingPlanType 1', BillingPlanType_Description: 'Description for BillingPlanType 1', BillingPlan_type_ID: 1, createdAt: new Date(), updatedAt: new Date() },
      { BillingPlanType_Name: 'BillingPlanType 2', BillingPlanType_Description: 'Description for BillingPlanType 2', BillingPlan_type_ID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BillingPlanTypes', null, {});
  }
};