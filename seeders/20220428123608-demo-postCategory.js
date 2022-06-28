'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PostCategories', [{
      id:1,
      categoryName: "Programacion y tecnología",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      categoryName: "Diseno Grafico",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:3,
      categoryName: "Video y animación",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:4,
      categoryName: "Audio",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:5,
      categoryName: "Traducción",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:6,
      categoryName: "Limpieza",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:7,
      categoryName: "Confección",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:8,
      categoryName: "Otro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
