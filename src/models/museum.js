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



module.exports = { getAllMuseums, getOneMuseum }
