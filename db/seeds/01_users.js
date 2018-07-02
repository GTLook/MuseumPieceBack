const TABLE_NAME = 'users'
const SHORTID = require('shortid')

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, user_shortid: SHORTID.generate(), user_first_name: 'Dan', user_last_name: 'Dog', user_email: 'dandog@gmail.com', user_hashed_password: '$2a$10$le4wxT7h3lM/Nt/P0ioTkOQ7FlIInpPK5G3iRK3YswmSZT2ihhcpm'},
        {id: 2, user_shortid: SHORTID.generate(), user_first_name: 'Gavin', user_last_name: 'Look', user_email: 'GTLook@gmail.com', user_hashed_password: '$2a$10$le4wxT7h3lM/Nt/P0ioTkOQ7FlIInpPK5G3iRK3YswmSZT2ihhcpm' },
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
