'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Licences', [
      { Licence_Name: 'Licence 1', Start_Date: new Date(), End_Date: new Date(), IsActive: true, Enterprise_Allowed: true, Branch_Allowed: true, User_Allowed: true, Licence_TypeID: 1, Billing_Plan_LicenceID: 1, licenceJWT: 'jwt-token-licence-1', LicenceTypeID: 1, createdAt: new Date(), updatedAt: new Date() },
      { Licence_Name: 'Licence 2', Start_Date: new Date(), End_Date: new Date(), IsActive: true, Enterprise_Allowed: true, Branch_Allowed: true, User_Allowed: true, Licence_TypeID: 2, Billing_Plan_LicenceID: 2, licenceJWT: 'jwt-token-licence-2', LicenceTypeID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Licences', null, {});
  }
};