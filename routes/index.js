const RegisterController = require('../controllers/registerController');
const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');
const LoginController = require('../controllers/loginController');
const orderDetailsController = require('../controllers/orderDetailsController')
const forgotPasswordController = require('../controllers/forgotPasswordController')
const FreelancerController = require('../controllers/freelancerController');
const PostCategoryController = require('../controllers/postCategoryController');
const ShoppingController = require('../controllers/shoppingController');
const RecommendationController = require("../controllers/recommendationController");
const ReviewController = require("../controllers/reviewController");
const MySalesController = require("../controllers/mySalesController");

module.exports = (app) => {
    var router = require("express").Router();

    // User routes
    router.get("/users", UserController.findAll);
    router.get("/user/:id", UserController.findUserById);
    router.post("/users/create", UserController.create);
    router.get("/profile/:id", UserController.profileInfoById);
    router.post("/user/:id/update", UserController.update);
    router.post('/user/:id/delete', UserController.delete);

    // PostCategory routes
    router.get("/categories", PostCategoryController.getCategories);
    router.get("/categories/:id", PostCategoryController.getPostsByCategory);

    // Post routes
    router.post('/post/create', PostController.fileUpload, PostController.create);
    router.post('/post/:id/update', PostController.update);
    router.post('/post/:id/delete', PostController.delete);
    router.post('/post/:id', PostController.getPostInfo);
    router.get("/post/:id/:cat/related", PostController.getRelatedPosts);
    // Get all users
    router.get('/post/getAll', PostController.findAllPosts);

    //Register routes
    router.post("/register", RegisterController.register);
    router.post("/register/freelancer", RegisterController.registerFreelancer);

    //Login routes
    router.post("/login", LoginController.login);
    router.get("/login", LoginController.home);

    //Order routes
    router.get("/profile/:id/orders", orderDetailsController.findAllOrderedItemsByUser);
     
    //Search routes
    //Funcionan como /search?keyword=algo
    router.get("/search", PostController.searchPost);
    router.get("/searchFreelancer", FreelancerController.searchFreelancer);

    //RecoveryPassword routes
    router.post("/recoveryPassword/:change", forgotPasswordController.sendEmail);
    router.post("/resetPassword/:id/:tokenResetPassword", forgotPasswordController.resetPassword);

    //Freelancer routes
    router.get("/freelancer", FreelancerController.findAllFreelancers);
    router.get("/freelancer/:id", FreelancerController.findFreelancerById);
    router.get("/freelancer/user/:id", FreelancerController.findFreelancerByUserId);
    router.get("/freelancer/profile/:id", FreelancerController.profileInfoFreelancerById);
    router.get("/freelancer/post/:id", FreelancerController.getPostsByFreelancer);
    router.post("/freelancer/:id/update", FreelancerController.update);

    //router.get("/freelancer/profile/:username", FreelancerController.profileInfoFreelancerByUsername);

    //ShoppingSession routes


    /**
     * Recibe el id del usuario y el id del anuncio en un body.
     * {"userId": 5, "postId": 2 }
     */
    router.post("/shopping/addItem", ShoppingController.addItemToSession);

    /**
     * Recibe el id del item y la nueva cantidad en un body, pero lo podria cambiar si lo prefieren de otra forma
     * /shopping/addItem {"cartItemId":  "21","newQuantity": "5" }
     */
    router.post("/shopping/changeQuantity", ShoppingController.changeItemQuantity);

    /**
     * Dado  el id de un Usiario y de un  Anuncio (Eso es, su postId), lo elimina directamente de la base de datos.
     * Ejemplo /shopping/removeItem/1/20 (usuario 1, post 20)
     */
    router.post("/shopping/removeItem/:userId/:postId", ShoppingController.removeCartItem);

    /**
     * Recibe la id del usuario como parametro y devuelve la sesion del usuario. Mas que nada una ruta de utilidad que quizas
     * sea necesaria para probar algo en el futuro.
     * Ejemplo /shopping/getSessionId/1
     */
    router.get("/shopping/getSessionId/:userId", ShoppingController.getShoppingIdByUser);

    /**
     * Recibe la id del usuario como parametro, devuelve la lista de elementos en su carrito
     * Ejemplo /shopping/getCartItems/1
     */
    
    router.get("/shopping/getCartItems/:id", ShoppingController.getShoppingSessionItems);

    /**
     * Finalizar orden.
     * Recibe la id del usuario como parametro. Borra los items del carrito del usuario, setea el total a 0, crea una orden
     * y los items ordenados para que dejen reviews y tales.
     */

    router.get("/shopping/endShoppingSession/:id", ShoppingController.endShoppingSession);

    //MyRecommendations routes
    router.get("/recommendations", RecommendationController.getRecommendations);

    //Reviews routes
    router.post("/review", ReviewController.addReview);
    router.post("/review/update/:id", ReviewController.update);
    router.post('/review/delete/:id', ReviewController.delete);
    router.get('/review/:userId/:orderItemId', ReviewController.getReviewByUser);
    router.get('/freelancer/getReviews/:freelancerId', ReviewController.getRatingsByFreelancer) //Utilidad, trae solo los ratings dados a los productos de un freelancer

    //Sales routes
    router.get("/profile/:id/sales",MySalesController.findSalesByFreelancer)
    app.use("/", router);

    //Image routes
    router.post('/image/upload', PostController.fileUpload, PostController.uploadImage)
    // Recibe el id del post y el nombre de la imagen
    // ejemplo imagen.jpg en el body {"thumbnailUrl": "imagen.jpg"}
    // Deberia poder abrir https://free-lanzate-back.herokuapp.com/images/test.gif, que fue subida por controlador
    router.post('/post/:id/addImage', PostController.addImageToPost)

    
    router.post('/image/profileUpload', UserController.fileUpload, UserController.uploadImage)
    // Recibe el id del user y el nombre de la imagen
    // ejemplo imagen.jpg en el body {"thumbnailUrl": "imagen.jpg"}
    // Deberia poder abrir https://free-lanzate-back.herokuapp.com/images/test.gif, que fue subida por controlador
    router.post('/user/:id/addImage', UserController.addImageToUser)
};