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

module.exports = { getAllGalleries, getOneGallery }
