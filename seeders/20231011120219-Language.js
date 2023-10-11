'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Platforms', [
      { language: 'Español',acronyms: 'ES', language_Allowed: DataTypes.BOOLEAN ,createdAt: new Date(), updatedAt: new Date() },
      { language: 'Esglish',acronyms: 'EN', language_Allowed: DataTypes.BOOLEAN ,createdAt: new Date(), updatedAt: new Date() }
     
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Platforms', null, {});
  }
};