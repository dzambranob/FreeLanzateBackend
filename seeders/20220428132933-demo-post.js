'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Uno tiene la palabra programacion, luego veo con tilde, en el titulo, otra en la descripcion. Para testear algo de busqueda.
    return queryInterface.bulkInsert('Posts', [{
      id:1,
      postTitle: "Programacion en Java y Python",
      FreelancerId: 1,
      postDescription: "Una descripcion de todos los tutoriales de youtube que he visto",
      postPrice: 1000,
      PostCategoryId: 1,
      thumbnailUrl: "java.jpg",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id:2,
      postTitle: "Programo en Golang y Scala",
      FreelancerId: 2,
      postDescription: "Una descripcion de todos los tutoriales de programacion de youtube que he visto",
      postPrice: 2000,
      PostCategoryId: 1,
      thumbnailUrl: "golang.jpg",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:3,
      postTitle: "Programador de Aplicaciones moviles",
      FreelancerId: 2,
      postDescription: "Una descripcion",
      postPrice: 2000,
      PostCategoryId: 1,
      thumbnailUrl: "apps.jpg",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:4,
      postTitle: "Posters de cualquier tamaño",
      FreelancerId: 7,
      postDescription: "De todo tamaño y forma",
      postPrice: 15000,
      PostCategoryId: 2,
      thumbnailUrl: "poster.jpg",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:5,
      postTitle: "Traducción al inglés",
      FreelancerId: 3,
      postDescription: "Traducción de textos e imágenes",
      postPrice: 50000,
      PostCategoryId: 5,
      thumbnailUrl: "traduccionIngles.jpg",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:6,
      postTitle: "Edición de video profesional",
      FreelancerId: 4,
      postDescription: "Edito video en Movie Maker",
      postPrice: 40000,
      PostCategoryId: 3,
      thumbnailUrl: "editorVideo.jpg",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:7,
      postTitle: "Parranda vallenata",
      FreelancerId: 4,
      postDescription: "Parranda vallenata y otros géneros",
      postPrice: 25000,
      PostCategoryId: 8,
      thumbnailUrl: "Parranda.jpg",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:8,
      postTitle: "Clase de salsa",
      FreelancerId: 1,
      postDescription: "Clases de salsa para todas las edades",
      postPrice: 35000,
      PostCategoryId: 8,
      thumbnailUrl: "salsa.jpg",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:9,
      postTitle: "Limpieza de autos",
      FreelancerId: 7,
      postDescription: "Limpieza de todo tipo de autos a domicilio. Calidad Garantizada",
      postPrice: 70000,
      PostCategoryId: 6,
      thumbnailUrl: "carwash.jpg",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:10,
      postTitle: "Traducción al español",
      FreelancerId: 3,
      postDescription: "Traducción profesional de documentos en inglés, francés o alemán al español",
      postPrice: 55000,
      PostCategoryId: 5,
      thumbnailUrl: "traduccionEsp.jpg",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:11,
      postTitle: "Producción de comerciales",
      FreelancerId: 7,
      postDescription: "Grabación y edición de comerciales para todos los productos",
      postPrice: 100000,
      PostCategoryId: 3,
      thumbnailUrl: "produccionAudiovisual.jpg",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:12,
      postTitle: "Servicio de contaduría",
      FreelancerId: 3,
      postDescription: "Todos los servicios de contaduría en un solo lugar",
      postPrice: 30000,
      PostCategoryId: 8,
      thumbnailUrl: "contaduria.jpg",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:13,
      postTitle: "Confección de camisas y camisetas",
      FreelancerId: 5,
      postDescription: "Confecciones de camisas y camisetas de todos los estilos, tallas y colores",
      postPrice: 45000,
      PostCategoryId: 7,
      thumbnailUrl: "confeccion.jpg",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:14,
      postTitle: "Contrucción de muebles de madera",
      FreelancerId: 6,
      postDescription: "Se construyen todo tipo de muebles de madera",
      postPrice: 150000,
      PostCategoryId: 8,
      thumbnailUrl: "construccion.jpg",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:15,
      postTitle: "Preparación de comida para eventos",
      FreelancerId: 8,
      postDescription: "Preparación de comida para toda clase de eventos",
      postPrice: 85000,
      PostCategoryId: 8,
      thumbnailUrl: "comidaEventos.jpg",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:16,
      postTitle: "Arreglo de televisores y computadores",
      FreelancerId: 3,
      postDescription: "Reparación profesional de televisores de pantalla plana y computadores portátiles. Calidad garantizada",
      postPrice: 100000,
      PostCategoryId: 1,
      thumbnailUrl: "arregloTv.jpg",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:17,
      postTitle: "Publicidad para negocios",
      FreelancerId: 7,
      postDescription: "Publicidad para avisos de negocios",
      postPrice: 90000,
      PostCategoryId: 2,
      thumbnailUrl: "publicidad.jpg",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:18,
      postTitle: "Arreglo de celulares",
      FreelancerId: 3,
      postDescription: "Arreglo de celulares de todas las marcas",
      postPrice: 55000,
      PostCategoryId: 1,
      thumbnailUrl: "celulares.jpg",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:19,
      postTitle: "Maestro de obra",
      FreelancerId: 9,
      postDescription: "Mestro de obra en arreglo de casas y apartamentos con experiencia",
      postPrice: 1500000,
      PostCategoryId: 8,
      thumbnailUrl: "obra.jpg",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:20,
      postTitle: "Clase de bordado a mano",
      FreelancerId: 1,
      postDescription: "Clases de bordado de sacos para todas las edades",
      postPrice: 70000,
      PostCategoryId: 8,
      thumbnailUrl: "bordado.jpg",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
