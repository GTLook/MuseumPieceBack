const db = require('../../db/knex')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAllMuseums = () => {
  return (
    db('museum')
  )
}

const getOneMuseum = ( museumId ) => {
  return (
    db('museum')
    .where({ id: museumId })
    .returning('*')
  )
}

const getAllGallery = () => {
  return db('gallery')
}

const getAllMuseumsWithGallery = () => {
 return (
   db('museum')
   .then(museums => {
     const museumsWithGalleries = museums.map(museum => {
       db('gallery')
         .where({ museum_id: museum.id })
         .then(gallery => {
            museum.gallery = gallery
         })
         return museum
     })
     Promise.all(museumsWithGalleries)
     return museumsWithGalleries
   })
 )
}

//
// const create = (snackId, userId, {title, text, rating}) => {
//   return (
//     db('reviews')
//     .insert({title, text, rating, snack_id: snackId, user_id: userId})
//     .returning('*')
//   )
// }
//
// const modify = (snackId, reviewId, userId, {title, text, rating}) => {
//   return (
//     db('reviews')
//     .where({ id: reviewId })
//     .update({title, text, rating, snack_id: snackId, user_id: userId})
//     .returning('*')
//   )
// }
//
// const remove = (reviewId) => {
//   return (
//     db('reviews')
//     .where({ id: reviewId })
//     .first()
//     .del()
//     .returning('*')
//   )
// }


module.exports = { getAllMuseums, getOneMuseum, getAllMuseumsWithGallery}
