const TABLE_NAME = 'museum'
const SHORTID = require('shortid')

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, museum_shortid: SHORTID.generate(), museum_name: 'Van Gogh Museum', museum_address:'Museumplein 6', museum_city:'Amsterdam', museum_state:'Museumplein 6', museum_postalcode:'1071', museum_placeid:'ChIJX1rTlu8JxkcRGsV8-a4oKMI', museum_picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/SeattleArtMuseum07expand.jpg/1920px-SeattleArtMuseum07expand.jpg'},
        {id: 2, museum_shortid: SHORTID.generate(), museum_name: 'Seattle Art Museum', museum_address:'1300 1st Ave', museum_city:'Seattle', museum_state:'WA', museum_postalcode:'98101', museum_placeid:'ChIJSxh5JbJqkFQRxI1KoO7oZHs', museum_picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Van_Gogh_Museum_in_Amsterdam_am_Abend.jpg/2560px-Van_Gogh_Museum_in_Amsterdam_am_Abend.jpg'},
        {id: 3, museum_shortid: SHORTID.generate(), museum_name: 'The Louvre', museum_address:'Rue de Rivoli', museum_city:'Paris', museum_state:'', museum_postalcode:'75001', museum_placeid:'ChIJD3uTd9hx5kcR1IQvGfr8dbk', museum_picture:'https://en.wikipedia.org/wiki/Louvre#/media/File:Louvre_Museum_Wikimedia_Commons.jpg'},
        {id: 4, museum_shortid: SHORTID.generate(), museum_name: 'Seattle Museum of Pop Culture', museum_address:'325 5th Ave N', museum_city:'Seattle', museum_state:'WA', museum_postalcode:'98109', museum_placeid:'ChIJY8p6-EYVkFQREthJEc0p6dE', museum_picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/EMPPano11.jpg/330px-EMPPano11.jpg'},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
