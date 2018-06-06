'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
        username: "jbravo",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        username: "pcake",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        username: "stallion",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        username: "ironman",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        username: "bbb",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        username: "goat",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
