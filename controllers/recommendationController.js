const db = require("../models");
const Post = db.Post;
const Op = db.Sequelize.Op;

exports.getRecommendations = async (req, res) =>{
    let recommendation = [];
    let p = 3;
    let priorityId = await Post.getIdFromPriority(p);
    let len = priorityId.length;
    for (let i=0; i<len; i++){
            //const randomIndex = Math.floor(Math.random()*priorityId.length);
            //const item = priorityId.splice(randomIndex,1);
            //recommendation.push(item[0]);
        recommendation.push(priorityId[i]);
    }
    res.send(recommendation)
};