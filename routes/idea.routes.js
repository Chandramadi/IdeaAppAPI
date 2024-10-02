/**
 * Route for
 * GET 127.0.0.1:3000/ideaApp/api/v1/ideas
 */

//connecting routes to controllers
const controllers = require("../controllers/idea.controllers");

function getAllIdeas(app){
    app.get("/ideaApp/api/v1/allIdeas", controllers.getAllIdeasController);
}

function getIdeaBasedOnId(app){
    app.get("/ideaApp/api/v1/allIdeas/:basedOnId",controllers.getideaBasedOnIdController);
}

function postIdeas(app){
    app.post("/ideaApp/api/v1/allIdeas",controllers.postIdeasController);
}

function updateIdeas(app){
    app.put("/ideaApp/api/v1/allIdeas/",controllers.putIdeaController);
}
function deleteIdea(app){
    app.delete("/ideaApp/api/v1/allIdeas/:id",controllers.deleteIdeaController);
}

module.exports = {
    getAllIdeas,
    getIdeaBasedOnId,
    postIdeas,
    deleteIdea,
    updateIdeas,
};