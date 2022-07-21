const mongoose = require('mongoose')

const taskModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("taskcollection", taskModel);

