const mongoose = require('mongoose');

const mongoDBCoonection = async () => {
    await mongoose.connect('mongodb+srv://pascalmonanu:pascal@cluster0.y0m6zqd.mongodb.net/')
    .then((info)=> {
        console.log('connection established', info)
    })
    .catch(err => console.log('error connecting', err))
}

module.exports = mongoDBCoonection