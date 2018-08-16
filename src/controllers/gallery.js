const dataModel = require('../models/gallery')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAllGalleries = (req, res, next) => {
  dataModel.getAllGalleries()
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const getOneGallery = (req, res, next) => {
  dataModel.getOneGallery(req.params.museumId)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}


module.exports = { getAllGalleries, getOneGallery }
