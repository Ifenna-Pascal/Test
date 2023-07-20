const router = require('express').Router();
const teacherRoute = require('./teacher');

router.use('/teacher', teacherRoute);

module.exports = router;