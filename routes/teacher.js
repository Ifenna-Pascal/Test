const express = require('express');
const router = express.Router();
const teacherController = ('./index.js')

// create a teacher router
router.post('/add', (req,res) =>{
    console.log(req.body)
} )

module.exports = router;