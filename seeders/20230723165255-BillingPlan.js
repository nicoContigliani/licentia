'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BillingPlans', [
      { Plan_Name: 'BillingPlan 1', Description: 'Description for BillingPlan 1', BillingPlan_type_ID: 1, createdAt: new Date(), updatedAt: new Date() },
      { Plan_Name: 'BillingPlan 2', Description: 'Description for BillingPlan 2', BillingPlan_type_ID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BillingPlans', null, {});
  }
};