const db = require('../../db/knex')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAllMuseums = () => {
  return (
    db('museum')
    .then(museums => {
        const museumsWithGalleries = museums.map(museum => {
        return db('gallery')
          .where({ museum_id: museum.id })
          .then(gallery => {
             museum.gallery = gallery
             return museum
          })
      })
      return Promise.all(museumsWithGalleries)
    })
  )
}

const getOneMuseum = ( museumId ) => {
  return (
    db('museum')
    .where({ id: museumId })
    .then(museum => {
        const museumWithGallery = museum.map(museum => {
        return db('gallery')
        .where({ museum_id: museum.id })
        .then(gallery => {
           museum.gallery = gallery
           return museum
         })
        })
        return Promise.all(museumWithGallery)
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


module.exports = { getAllMuseums, getOneMuseum }
