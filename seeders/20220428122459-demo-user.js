'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      id:1,
      username: "cgarcia",
      firstName: 'Camilo',
      lastName: 'Garcia',
      email: 'cgarcia@hotmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'Camilo.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      username: "ymccartney",
      firstName: 'Yazmin',
      lastName: 'Mccartney',
      email: 'ymccartney@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'Yazmin.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:3,
      username: "ngalindo",
      firstName: 'Noemi',
      lastName: 'Galindo',
      email: 'ngalindo@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:4,
      username: "dzambranob",
      firstName: 'David',
      lastName: 'Zambrano',
      email: 'davidalexz2015@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'David.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:5,
      username: "jubustamantem",
      firstName: 'Juan',
      lastName: 'Bustamante',
      email: 'jubustamantem@unal.edu.co',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:6,
      username: "jmrodriguez",
      firstName: 'John Milton',
      lastName: 'Rodriguez',
      email: 'jmrodriguez@hotmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'John_Milton.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:7,
      username: "acherandez",
      firstName: 'Andrés Camilo',
      lastName: 'Hernández',
      email: 'achernadez@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'Andres.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:8,
      username: "jvalvuena",
      firstName: 'Jesús',
      lastName: 'Valvuena',
      email: 'jvalvuena@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:9,
      username: "eamaya",
      firstName: 'Eutimio',
      lastName: 'Amaya',
      email: 'eamaya@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:10,
      username: "mcontreras",
      firstName: 'Marcos',
      lastName: 'Contreras',
      email: 'mcontreras@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'Marcos.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:11,
      username: "adominguez",
      firstName: 'Antonio',
      lastName: 'Dominguez',
      email: 'adominguez@hotmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:12,
      username: "tcastro",
      firstName: 'Tatiana',
      lastName: 'Castro',
      email: 'tcastro@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'Tatiana.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:13,
      username: "aorozco",
      firstName: 'Alex',
      lastName: 'Orozco',
      email: 'aorozco@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'Alex.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:14,
      username: "jmcanas",
      firstName: 'Juan Manuel',
      lastName: 'Cañas',
      email: 'jmcanas@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      avatarUrl: 'Juan_Manuel.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:15,
      username: "mjsalgado",
      firstName: 'María José',
      lastName: 'Salgado',
      email: 'mjsalgado@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
