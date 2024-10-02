/**
 * This is the entry point of my app.
 */

const express = require("express");

const app = express();

// This middleware parses JSON bodies, regardless of the HTTP method
app.use(express.json());

//connecting app to route
const routes = require("./routes/idea.routes");
routes.getAllIdeas(app);
routes.getIdeaBasedOnId(app);
routes.postIdeas(app);
routes.deleteIdea(app);
routes.updateIdeas(app);

app.listen(30,()=>{
    console.log("Listening on port number: 30");
});






