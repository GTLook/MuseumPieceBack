const dataModel = require('../models/museum')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAllMuseums = (req, res, next) => {
  dataModel.getAllMuseums()
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const getOneMuseum = (req, res, next) => {
  dataModel.getOneMuseum(req.params.museumId)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}


module.exports = { getAllMuseums, getOneMuseum }
