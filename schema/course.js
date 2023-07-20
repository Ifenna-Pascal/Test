const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    name: String,
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'teacher'
    }
});

const coursemodel = mongoose.model('course', courseSchema);
module.exports = coursemodel