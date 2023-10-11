
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ModulePlan', [
      {ModuleId:1,PlanId: 1,modulePlan_Allowed: true, createdAt: new Date(), updatedAt: new Date()},

      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ModulePlan', null, {});
  }
};