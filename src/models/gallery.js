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


module.exports = { getAllGalleries, getOneGallery }
