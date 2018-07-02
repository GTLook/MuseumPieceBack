const express = require('express')
const router = express.Router()
const controller = require('../controllers/museum')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
// router.post('/', controller.create)
// router.patch('/:id', controller.patch)
// router.delete('/:id', controller.delete)

module.exports = router
