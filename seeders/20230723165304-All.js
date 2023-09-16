'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alls', [
      { Enterprise_Name: 'Enterprise 1', Branch_Name: 'Branch 1', User_Name: 'User 1', password: 'password1', client_Allowed: true, email: 'user1@example.com', phone: '123456789', AllTypeID: 1, createdAt: new Date(), updatedAt: new Date() },
      { Enterprise_Name: 'Enterprise 2', Branch_Name: 'Branch 2', User_Name: 'User 2', password: 'password2', client_Allowed: true, email: 'user2@example.com', phone: '987654321', AllTypeID: 2, createdAt: new Date(), updatedAt: new Date() }
      // Agrega más registros según tus necesidades
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Alls', null, {});
  }
};