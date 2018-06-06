'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Directions', [{
      code : '0000',
      name : 'test',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
        code : '0001',
        name : 'test1',
        createdAt : new Date(),
        updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Directions', [{
      code :['0000', '0001']
    }])
  }
};
