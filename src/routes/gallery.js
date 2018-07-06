const express = require('express')
const router = express.Router()
const controller = require('../controllers/gallery')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/:museumId/gallery/', controller.getAllGalleries)
router.get('/:museumId/gallery/:galleryId', controller.getOneGallery)

// router.post('/', controller.create)
// router.patch('/:id', controller.patch)
// router.delete('/:id', controller.delete)

module.exports = router
