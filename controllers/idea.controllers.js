/**
 * Create the controller for fetching all the ideas.
 * 
 * return a list of all the ideas.
 */

// connecting controller to models
const ideaObj = require("../models/idea.models"); 

//Initial count of ideas
let id = Object.keys(ideaObj).length;

//Get all the ideas
function getAllIdeasController(req, res){
    //return the ideas
    res.status(200).send(ideaObj);
}

//Get an Idea based on an 'id'
function getideaBasedOnIdController(req,res){
    const idReceived = req.params.basedOnId;
    if(ideaObj[idReceived]){
        res.status(200).send(Obj[idReceived]);
    }
    else{
        res.status(404).send(`Incorrect Id ${req.params.basedOnId}`);
    }
}

// post an Idea
function postIdeasController(req, res){
    const postedIdeas = req.body;
    id++;
    postedIdeas["id"] = id;
    ideaObj[id] = postedIdeas;
    res.status(200).send({
        Message:"Successfully posted the idea"
    })
}

//Update an Idea
function putIdeaController(req,res){
    const toUpdateIdea = req.body;
    const id = toUpdateIdea.id;
    if(ideaObj[id]){
        const {authorName:name,idea:project} = toUpdateIdea;
        ideaObj[id]["authorName"] = name;
        ideaObj[id]["idea"] = project;
        res.status(201).send({
            Message:"Successfully updated the idea"
        })
    }
    else{
        res.status(400).send({
            Message:`Incorrect Id ${id}`
        })
    }
}

//Delete an Idea
function deleteIdeaController(req,res){
    const idReceived = req.params.id;
    if(ideaObj[idReceived]){
        delete ideaObj[idReceived];
        res.status(200).send({
            Message:"Successfully deleted the Obj"
        })
    }
    else{
        res.status(404).send({
            Message:`Incorrect Id ${idReceived}`
        })
    }
}

module.exports = {
    getAllIdeasController,
    getideaBasedOnIdController,
    postIdeasController,
    deleteIdeaController,
    putIdeaController,
};
