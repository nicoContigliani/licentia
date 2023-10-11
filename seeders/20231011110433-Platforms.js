'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Platforms', [
      { platforms:'internet',modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
      { platforms:'ubuntu',modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
      { platforms:'debian',modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
      { platforms:'windows',modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
      { platforms:'mac',modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
      { platforms:'android',modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },
      { platforms:'ios',modulePlatforms_Allowed:true ,createdAt: new Date(), updatedAt: new Date() },

      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Platforms', null, {});
  }
};