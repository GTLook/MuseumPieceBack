const express = require('express')
const router = express.Router()
const controller = require('../controllers/museum')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/', controller.getAllMuseums)
router.get('/:museumId', controller.getOneMuseum)

module.exports = router
