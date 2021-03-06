'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderItems', [{
      id:1,
      OrderDetailId: 1,
      PostId: 5,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:2,
      OrderDetailId: 1,
      PostId: 6,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:3,
      OrderDetailId: 2,
      PostId: 2,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:4,
      OrderDetailId: 5,
      PostId: 13,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:5,
      OrderDetailId: 15,
      PostId: 6,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:6,
      OrderDetailId: 16,
      PostId: 4,
      itemAmount: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:7,
      OrderDetailId: 4,
      PostId: 7,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:8,
      OrderDetailId: 6,
      PostId: 16,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:9,
      OrderDetailId: 9,
      PostId: 3,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:10,
      OrderDetailId: 11,
      PostId: 17,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:11,
      OrderDetailId: 6,
      PostId: 7,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:12,
      OrderDetailId: 13,
      PostId: 10,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:13,
      OrderDetailId: 8,
      PostId: 8,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:14,
      OrderDetailId: 14,
      PostId: 17,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:15,
      OrderDetailId: 3,
      PostId: 15,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:16,
      OrderDetailId: 5,
      PostId: 10,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:17,
      OrderDetailId: 5,
      PostId: 1,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};