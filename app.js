const express = require("express");
const taskRouter = require('./routes/taskRoute')
require('dotenv').config();
const connectDB = require('./db/connect');
const app = express()


app.use(express.json())

// home route
app.get("/", (req, resp) => {
    resp.send(`try to request <a href="/api/v1/tasks">API URL</a>`);
})

//tasks API routes

app.use("/api/v1/tasks", taskRouter)


// Main Function
const Main = async () => {
    const mongoose = await connectDB(process.env.MONGO_CONNECTION_STRING)
        .then((data) => {
            //console.log(data)
            app.listen(process.env.PORT, () => {
                console.log(`Server is listening on ${process.env.PORT}`)
            });
        }).catch((err) => {
            console.log(err);
        })
}

Main();


