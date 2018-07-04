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

const getAllMuseumsWithGallery = (req, res, next) => {
  dataModel.getAllMuseumsWithGallery()
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}
// const create = (req, res, next) => {
//   dataModel.create(req.params.id, req.claim.id, req.body)
//   .then((data) => res.status(201).json({ data }))
//   .catch(next)
// }

// const modify = (req, res, next) => {
//   dataModel.getOne(req.params.id)
//   .then(review => {
//     if(req.claim.id !== review[0]['user_id']) {
//       return next({ status: 401, message:  'Unauthorized'})
//     }
//     dataModel.modify(req.params.id, req.claim.id, req.body)
//     .then((data) => res.status(200).json({ data }))
//     .catch(next)
//   })
//   .catch(next)
// }

// const remove = (req, res, next) => {
//   dataModel.getOne(req.params.id)
//   .then(review => {
//     if(req.claim.id !== review[0]['user_id']) {
//       return next({ status: 401, message:  'Unauthorized'})
//     }
//     dataModel.remove(req.params.reviewId)
//     .then((data) => res.status(200).json({ data }))
//     .catch(next)
//   })
//   .catch(next)
// }

module.exports = { getAllMuseums, getOneMuseum, getAllMuseumsWithGallery }
