'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BillingPlanTypes', [
      { BillingPlanType_Name: 'Type 1', BillingPlanType_Description: 'Description for Type 1', BillingPlan_type_ID: 1, createdAt: new Date(), updatedAt: new Date() },
      { BillingPlanType_Name: 'Type 2', BillingPlanType_Description: 'Description for Type 2', BillingPlan_type_ID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BillingPlanTypes', null, {});
  }
};