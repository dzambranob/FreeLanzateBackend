'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('CartItems', [{
            id:1,
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:14
        },
        {
            id:2,
            quantity: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:15
        },
        {
            id:3,
            quantity: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:10
        },
        {
            id:4,
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:4
        },
        {
            id:5,
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 2,
            postId:15
        },
        {
            id:6,
            quantity: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 2,
            postId:10
        },
        {
            id:7,
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 2,
            postId:11
        },
        {
            id:8,
            quantity: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 6,
            postId:4
        },
        {
            id:9,
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 7,
            postId:7
        },
        {
            id:10,
            quantity: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 3,
            postId:20
        },
    ]);
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('CartItems', null, {});
    }
};