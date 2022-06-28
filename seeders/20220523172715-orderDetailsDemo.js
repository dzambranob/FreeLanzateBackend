'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderDetails', [{
      id:1,
      UserId: 1,
      orderTotal: 5000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:2,
      UserId: 1,
      orderTotal: 3000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:3,
      UserId: 12,
      orderTotal: 305000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:4,
      UserId: 7,
      orderTotal: 167000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:5,
      UserId: 9,
      orderTotal: 520000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:6,
      UserId: 3,
      orderTotal: 367000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:7,
      UserId: 12,
      orderTotal: 4500000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:8,
      UserId: 14,
      orderTotal: 675000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:9,
      UserId: 10,
      orderTotal: 453000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:10,
      UserId: 13,
      orderTotal: 354000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:11,
      UserId: 6,
      orderTotal: 450670,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:12,
      UserId: 3,
      orderTotal: 4563000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:13,
      UserId: 11,
      orderTotal: 3450000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:14,
      UserId: 5,
      orderTotal: 126000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:15,
      UserId: 9,
      orderTotal: 123000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:16,
      UserId: 12,
      orderTotal: 453400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};