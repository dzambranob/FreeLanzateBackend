'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('ShoppingSessions', [{
            id:1,
            total: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        },
        {
            id:2,
            total: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 2,
        },
        {
            id:3,
            total: 2000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 3,
        },
        {
            id:4,
            total: 4500000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 8,
        },
        {
            id:5,
            total: 54654,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 6,
        },
        {
            id:6,
            total: 3503700,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 4,
        },
        {
            id:7,
            total: 5600000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 15,
        },
        {
            id:8,
            total: 34700000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 4,
        },
        {
            id:9,
            total: 23400600,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 13,
        },
        ]);
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ShoppingSessions', null, {});
    }
};