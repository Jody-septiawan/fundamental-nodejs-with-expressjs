//instantiate express module here
const express = require('express');

// Init express router here..
const router = express.Router();

// Get controller here
const { getTodos, getTodo } = require('../controllers/todo');

// Create Route here
router.get('/todos', getTodos);
router.get('/todo/:id', getTodo);

// Export module router here
module.exports = router;
