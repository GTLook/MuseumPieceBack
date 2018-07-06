const TABLE_NAME = 'art'
const SHORTID = require('shortid')

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, art_shortid: SHORTID.generate(), gallery_id: 1, art_title: "art1", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 2, art_shortid: SHORTID.generate(), gallery_id: 1, art_title: "art2", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 3, art_shortid: SHORTID.generate(), gallery_id: 1, art_title: "art3", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 4, art_shortid: SHORTID.generate(), gallery_id: 1, art_title: "art4", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 5, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art5", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 6, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art6", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 7, art_shortid: SHORTID.generate(), gallery_id: 3, art_title: "art7", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 8, art_shortid: SHORTID.generate(), gallery_id: 3, art_title: "art8", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 9, art_shortid: SHORTID.generate(), gallery_id: 4, art_title: "art9", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 10, art_shortid: SHORTID.generate(), gallery_id: 4, art_title: "art10", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 11, art_shortid: SHORTID.generate(), gallery_id: 4, art_title: "art11", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
        {id: 12, art_shortid: SHORTID.generate(), gallery_id: 1, art_title: "art12", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/100/100'},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
