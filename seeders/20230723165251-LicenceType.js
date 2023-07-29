'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LicenceTypes', [
      { Type_Name: 'Type 1', Description: 'Description for Type 1', Max_Duration: 365, Premium_Support: true, Users_Included: 10, createdAt: new Date(), updatedAt: new Date() },
      { Type_Name: 'Type 2', Description: 'Description for Type 2', Max_Duration: 730, Premium_Support: false, Users_Included: 5, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LicenceTypes', null, {});
  }
};