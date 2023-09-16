'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Licences', [
      { Licence_Name: 'Licencia 1', Start_Date: new Date(), End_Date: new Date(), Licence_TypeID: 1, Billing_Plan_LicenceID: 1, licenceJWT: 'jwt-token-licence-1', LicenceTypeID: 1, Licence_Allowed: true, createdAt: new Date(), updatedAt: new Date() },
      { Licence_Name: 'Licencia 2', Start_Date: new Date(), End_Date: new Date(), Licence_TypeID: 2, Billing_Plan_LicenceID: 2, licenceJWT: 'jwt-token-licence-2', LicenceTypeID: 2, Licence_Allowed: false, createdAt: new Date(), updatedAt: new Date() },
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Licences', null, {});
  }
};