// task controller
const mongoose = require('mongoose')
const Task = require("../models/taskModel");

const getAllTasks = async (req, resp) => {
    Task.find({}).then((allTasks) => {
        resp.status(200).json(allTasks);
    }).catch((err) => {
        resp.status(500).json(err);
    })
}


const getSingleTask = async (req, resp) => {
    const id = req.params.id;
    const idValid = mongoose.Types.ObjectId.isValid(id);
    if (idValid) {
        Task.findOne({ _id: id }).then((data) => {
            if (!data) {
                resp.status(404).json("Task Not found!");
                return;
            }
            resp.status(200).json(data);
        }).catch((err) => {
            console.log("test")
            resp.status(500).json(err);
        })
    } else {
        resp.status(500).json("Please , enter valid ID!");
    }

}
const postTask = async (req, resp) => {
    const task = await Task.create(req.body);
    resp.status(201).json(task);

}
const deleteTask = (req, resp) => {
    const id = req.params.id;
    //console.log(id);
    Task.deleteOne({ _id: id }).then((data) => {
        resp.status(200).json(data);
    }).catch((err) => {
        resp.status(500).json(err);
    })

}
const updateTask = (req, resp) => {
    const id = req.params.id;
    const task = {
        name: req.body.name,
        completed: req.body.completed
    };
    //console.log(id);
    Task.updateOne({ _id: id }, task).then((data) => {
        resp.status(200).json(data);
    }).catch((err) => {
        resp.status(500).json(err);
    })

}

module.exports = { getAllTasks, getSingleTask, postTask, deleteTask, updateTask }