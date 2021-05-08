
const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

router.get('/',employeeController.findAll);
router.post('/',employeeController.create);
module.exports = router

