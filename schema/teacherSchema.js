const mongoose = require('mongoose');

const techerSchema = new mongoose.Schema({
    name: String,
    age: String,
});

const teacher = mongoose.model('teacher', techerSchema);
module.exports = teacher;