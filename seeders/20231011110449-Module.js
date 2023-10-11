
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ModulePlan', [
      {Module_Name: 'RRHH - Reclutamiento',Module_Description: 'Modulo para reclutar personas',Module_TypeID: 1,Module_Allowed: true,Module_Free: false, createdAt: new Date(), updatedAt: new Date()},
      {Module_Name: 'RRHH - Pago Nomina',Module_Description: 'Modulo para pagos a personas',Module_TypeID: 1,Module_Allowed: true,Module_Free: false, createdAt: new Date(), updatedAt: new Date()},

      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ModulePlan', null, {});
  }
};