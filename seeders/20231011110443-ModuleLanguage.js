'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ModuleLanguages', [
      { LanguageId:1,ModuleId:1,moduleLanguage_Allowed: true,createdAt: new Date(), updatedAt: new Date() },

      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ModuleLanguages', null, {});
  }
};