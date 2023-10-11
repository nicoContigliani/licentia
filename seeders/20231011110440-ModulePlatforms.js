
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ModulePlatforms', [
      { PlatformsId:1, ModuleId:1,modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
      { PlatformsId:1, ModuleId:2,modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
     
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ModulePlatforms', null, {});
  }
};