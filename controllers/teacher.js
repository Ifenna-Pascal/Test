const teacherRepo = require('../repo/techear.js')

const addTeacher = async (req,res) => {
    // const { name, age } = req.body
    // await teacherRepo.createTeacher({name, age})
    //     .then(() => console.log('Teacher created'))
    //     .catch((err) => console.log('error', err))
    res.send('dddsdfad')
}

module.exports = {addTeacher}