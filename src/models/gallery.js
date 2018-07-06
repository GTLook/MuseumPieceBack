const db = require('../../db/knex')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAllGalleries = () => {
  return (
    db('gallery')
    .then(gallery => {
        const galleriesWithArt = gallery.map(gallery => {
        return db('art')
          .where({ gallery_id: gallery.id })
          .then(art => {
             gallery.art = art
             return gallery
          })
      })
      return Promise.all(galleriesWithArt)
    })
  )
}

const getOneGallery = ( galleryId ) => {
  return (
    db('gallery')
    .where({ id: galleryId })
    .then(gallery => {
      const galleryWithArt = gallery.map(gallery => {
        return db('art')
        .where({ gallery_id: gallery.id })
        .then(art => {
           gallery.art = art
           return gallery
        })
      })
        return Promise.all(galleryWithArt)
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


module.exports = { getAllGalleries, getOneGallery }
