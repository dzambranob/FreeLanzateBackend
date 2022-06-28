'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [{
      id:1,
      reviewContent: "Muy buen traductor de textos. Recomendado",
      reviewRating: 5,
      OrderItemId: 1,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:2,
      reviewContent: "Muy mal servicio.",
      reviewRating: 1,
      OrderItemId: 6,
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:3,
      reviewContent: "Pésimo traductor.",
      reviewRating: 0,
      OrderItemId: 1,
      UserId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:4,
      reviewContent: "Buen servicio",
      reviewRating: 4,
      OrderItemId: 12,
      UserId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:5,
      reviewContent: "Servicio regular.",
      reviewRating: 3,
      OrderItemId: 10,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:6,
      reviewContent: "Excelente servicio",
      reviewRating: 5,
      OrderItemId: 12,
      UserId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:7,
      reviewContent: "Buen servicio",
      reviewRating: 4,
      OrderItemId: 5,
      UserId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:8,
      reviewContent: "Mal servicio.",
      reviewRating: 1,
      OrderItemId: 15,
      UserId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:9,
      reviewContent: "Excelente servicio",
      reviewRating: 5,
      OrderItemId: 11,
      UserId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:10,
      reviewContent: "Pesimo servicio.",
      reviewRating: 0,
      OrderItemId: 3,
      UserId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:11,
      reviewContent: "Muy buen servicio",
      reviewRating: 4,
      OrderItemId: 13,
      UserId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:12,
      reviewContent: "Servicio mal prestado",
      reviewRating: 0,
      OrderItemId: 1,
      UserId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:13,
      reviewContent: "El peor servicio que me han dado en mi vida",
      reviewRating: 1,
      OrderItemId: 3,
      UserId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:14,
      reviewContent: "Excelente servicio",
      reviewRating: 5,
      OrderItemId: 7,
      UserId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:15,
      reviewContent: "Pesimo servicio. No lo recomiendo",
      reviewRating: 1,
      OrderItemId: 6,
      UserId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:16,
      reviewContent: "Mal servicio.",
      reviewRating: 2,
      OrderItemId: 15,
      UserId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:17,
      reviewContent: "Mal trato del freelancer",
      reviewRating: 0,
      OrderItemId: 12,
      UserId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:18,
      reviewContent: "Excelente servicio",
      reviewRating: 5,
      OrderItemId: 3,
      UserId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:19,
      reviewContent: "Muy buen servicio",
      reviewRating: 4,
      OrderItemId: 5,
      UserId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:20,
      reviewContent: "Servicio regular.",
      reviewRating: 3,
      OrderItemId: 2,
      UserId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:21,
      reviewContent: "El servicio deja mucho que desear",
      reviewRating: 2,
      OrderItemId: 12,
      UserId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:22,
      reviewContent: "Muy buen servicio",
      reviewRating: 4,
      OrderItemId: 4,
      UserId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:23,
      reviewContent: "Muy buen servicio",
      reviewRating: 4,
      OrderItemId: 17,
      UserId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};