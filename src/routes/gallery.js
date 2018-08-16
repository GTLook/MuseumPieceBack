const express = require('express')
const router = express.Router()
const controller = require('../controllers/gallery')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/:museumId/gallery/', controller.getAllGalleries)
router.get('/:museumId/gallery/:galleryId', controller.getOneGallery)

module.exports = router
