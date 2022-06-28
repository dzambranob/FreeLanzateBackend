const db = require("../models");
const ShoppingSession = db.ShoppingSession
const CartItem = db.CartItem
const OrderItem = db.OrderItem
const OrderDetails = db.OrderDetails

const Op = db.Sequelize.Op;

/**
 * Al crear un usuario con User.create({}), se crea tambien'
 * la sesion de carrito que le pertence. Esto no sucede con los seeders
 * pues los seeders son directamente queries sobre la Base de datos y no hacen uso
 * de create o bulkCreate.
 * 
 */

/**
 * shoppingSessionController tiene las funciones correspondientes
 * a dos modelos, cartItem y shoppingSession
 */


 async function calculateCartTotal(shoppingSessionId){

    total = 0

    const cartItemList = await CartItem.findAll(
        {
            where: {
                sessionId: shoppingSessionId
            },
            include: {
                model: db.Post,
                attributes: ['postPrice']
            }
        },   
    );

    for (item of cartItemList){
        total += item.quantity * item.Post.postPrice
    }

    return total;
}


/**
 * 
 * Supongamos que en frontend se quiere anadir un item al carrito.
 * Esto usualmente ocurrira desde la pagina del item con un boton.
 * Lo que hace esta funcion es crear el item de carrito y al mismo tiempo
 * anadirlo a la sesion de compra del usuario.
 * 
 * Por lo tanto, recibe:
 * @userId
 * @postId
 * item de carrito (que tiene la propiedad de cantidad) y le anade la fk de la shoppingSession.
 * 
 */

exports.addItemToSession = async (req, res) => {

    const currentUserId = req.body.userId;
    const currentPostId = req.body.postId;

    //Se busca la sesion del user

    const userShoppingSession = await ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    );

    const sessionId = userShoppingSession.id

    //Se crea el item de carrito y se anada a la sesion

    //Se verifica que el item no este ya en el carrito, si lo esta se notifica, si no, se sigue el proceso.

    const itemVerification = await CartItem.findOne(
        {
            where: {
                postId: currentPostId,
                sessionId: userShoppingSession.id
            }
        }
    )

    if(!itemVerification) {
        CartItem.create(
            {
                quantity: 1,
                sessionId: sessionId,
                postId: currentPostId
            }
        ).then(async data => {
            userShoppingSession.total = await calculateCartTotal(userShoppingSession.id);
            await userShoppingSession.save();
            res.send(data);
        })
            .catch(err => {
                res.status(400).send({
                    message:
                        err.message || "Some error occurred while adding the item."
                });
            });
    } else {
        res.status(400).send({
            message:"El item ya se encuentra en el carrito y no ha sido anadido."
        });
    }

    
}

/**
 * 
 * Modifica la cantidad de un item ya anadido al carrito.
 * Toma la cantidad a setear y la id del cartItem (que ya fue creado al anadirse al carrito)
 * 
 * Recordatorio:
 * Modificar la cantidad de items deberia modificar el total de la orden del carrito
 *
 */

exports.changeItemQuantity = async (req, res) => {

    const cartItemId = req.body.cartItemId;
    const newQuantity = req.body.newQuantity;

    
    const cartItem = await CartItem.findOne(
        {
            where: {
                id: cartItemId
            }
        }
    );

    const userShoppingSession = await ShoppingSession.findOne(
        {
            where: {
                id: cartItem.sessionId
            }
        }
    );

    cartItem.quantity = newQuantity;

    await cartItem.save().then(
        async data => {
            userShoppingSession.total = await calculateCartTotal(cartItem.sessionId);
            await userShoppingSession.save();
            res.send(data);
        })
        .catch(err => {
            res.status(400).send({
                message:
                    err.message || "Some error occurred while modifying the item quantity."
            });
        });
}

/**
 * 
 * Dado el id (como parametro) de un usuario y la id del Post, ya anadido al carrito (Osea, ya instanciada una
 * fila de CartItem), 
 * se remueve su registro de la base de datos (De cartItems). Esto deberia ser suficiente para
 * la funcionalidad de remover del carrito.
 *
 */

exports.removeCartItem = async (req, res) => {

    const selectedPostId = req.params.postId;
    const currentUserId = req.params.userId;

    const currentSession = await ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    );

    const currentSessionId = currentSession.id

    const cartItem = await CartItem.findOne(
        {
            where: {
                postId: selectedPostId,
                sessionId: currentSessionId
            }
        }
    );

    if (cartItem != null) {
        await cartItem.destroy().then(
            async data => {
                currentSession.total = await calculateCartTotal(cartItem.sessionId);
                await currentSession.save();
                res.send(data);
            })
            .catch(err => {
                res.status(400).send({
                    message:
                        err.message || "Some error occurred while modifying the item quantity."
                });
            });
    } else {
        res.status(400).send({
            message: "The cart item does not exist"
        });
    }
}

/**
 * 
 * utility function
 * Obtiene el id de la sesion de carrito de un user. Por si es necesario.
 * 
 */

exports.getShoppingIdByUser = async (req, res) => {

    const currentUserId = req.params.userId;

    //Se busca la sesion del user

    await ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    ).then(
        data => {
            //Envio todo, pero la sesionId esta en data.userId
            res.send(data);
        })
        .catch(err => {
            res.status(400).send({
                message:
                    err.message || "Some error occurred while getting the shopping session."
            });
        });


}


/**
 * Obtiene todos los items en una sesion de carrito junto a la informacion del post y del freelancer.
 * Recibe el id del User, si es posible usar la sesion de usuario seria mas rapido. Hay que ver como
 * se haria en la parte de front.
 */

exports.getShoppingSessionItems = async (req, res) => {

    const currentUserId = req.params.id;

    const userShoppingSession = await ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    );

    await CartItem.findAll({
        where: {
            sessionId: userShoppingSession.id
        },
        include: [{
            model: db.Post,
            attributes: ['postTitle', 'postPrice','thumbnailUrl'],
            required: true,
            include: {
                model: db.Freelancer,
                attributes: ['freelancerRating'],
                required: true,
                include: {
                    model: db.User,
                    attributes: ['username', 'firstName', 'lastName'],
                    required: true,
                }
            }
        }
        ]
    }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the cartItems."
            });
        });


}

/**
 * La funcion toma una sesion de carrito y sus items y los convierte en una orden historica. Luego limpia la sesion, eso es,
 * elimina los items asociados a ella.
 * 
 * Recibe el Id del usuario como parametro
 */

exports.endShoppingSession = async (req, res) => {

    currentUserId = req.params.id

    const userShoppingSession = await ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    );

    await CartItem.findAll({
        where: {
            sessionId: userShoppingSession.id
        },
        include:{
            model: db.Post,
            attributes: ['postPrice'],
            required: true,
        }
    }).then(
        async cartItemList => {
            const orderDetails = await OrderDetails.create({ UserId: userShoppingSession.userId, orderTotal: userShoppingSession.total})
            // orderTotal = 0 //quizas lo use luego para calcular total, depende de como se haga
            for (cartItem of cartItemList) {
                await OrderItem.create(
                    {
                    itemAmount: cartItem.quantity, 
                    itemPrice: cartItem.Post.postPrice, 
                    PostId: cartItem.postId, 
                    OrderDetailId: orderDetails.id
                    }
                )
            }
            /* Limpiar el carro */
            CartItem.destroy({
                where:{
                    sessionId: userShoppingSession.id
                }
            })
            userShoppingSession.total = 0
            await userShoppingSession.save();

        res.send(cartItemList);
    }).catch(err => {
            res.status(500).send(
                {
                    message: err.message || "Some error occurred while creating the orderDetails."
                }
            );
        });

}


/**
 * 
 * Por hacer:
 * - Resolver el tema de calcular totales de carrito.
 * - Permitir que un usuario solo anada una instancia de post al carrito, si ya existe, que no haga nada o, que cambie la cantidad de ese item
 * - Conectar el proceso de pago con alguna pasarela de pago.
 */