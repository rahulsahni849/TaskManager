const express = require("express");
require('dotenv').config();
const app = express()


app.get("/", (req, resp) => {
    resp.send("This is get method");
})

app.post("/", (req, resp) => {
    resp.send("this is post method");
})
app.deelete("/", (req, resp) => {
    resp.send("this is delete");
})
app.put("/", (req, resp) => {
    resp.send("this is put");
})


app.listen(process.env.PORT);