const teacherModel = require('../schema/teacherSchema');
// add a teacher
const createTeacher = async (_name, _age) => {
    // const newTeacher = teacherModel.create({name: _name, age: _age});
    const newTeacherInstance = new teacherModel({name: _name, age: _age});
    const savedTeacher = newTeacherInstance.save();
    return savedTeacher;
 }
 
// see all teachears

const getAll = async () => {
    const t = teacherModel.find({age: age > 10})
    return t
}

// see one teacher

const oneTeacher = async () => {
    teacherModel.findOne({_id: 'dfdgdfgfgfgsdfgsfgsf'})
}

// update teacher details
const update = () => {
    teacherModel.findOneAndUpdate({_id: 'dfdgdfgdf'}, {name: "Ashley"})
}

// delete a teacher
const deleted = () => {
    teacherModel.findOneAndDelete({_id: 'df'})
}

module.exports = {createTeacher}