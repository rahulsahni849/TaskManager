const express = require('express')
const router = express.Router();
const { getAllTasks, getSingleTask, postTask, deleteTask, updateTask } = require('../controller/taskController')


router.get('/', getAllTasks)
    .post('/', postTask)
    .get('/:id', getSingleTask)
    .delete('/:id', deleteTask)
    .patch('/:id', updateTask)

module.exports = router