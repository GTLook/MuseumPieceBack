const TABLE_NAME = 'museum'
const SHORTID = require('shortid')

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, artist_shortid: SHORTID.generate(), artist_name: 'Van Gogh', artist_bio:'Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art.'},
        {id: 2, artist_shortid: SHORTID.generate(), artist_name: 'Marianne Nicolson', artist_bio: 'Marianne Nicolson is a visual artist, scholar, activist, and a member of the Dzawada‘enuxw First Nation of the Kwakwaka‘wakw First Nations in what is currently British Columbia. Her practice is informed by historical research, her background in linguistics and anthropology, and Dzawada’enuxw First Nation ways of being. She has exhibited artwork around the world and published numerous essays and articles on issues of Aboriginal histories and the politics of cultural revitalization and sustainability. She works with many materials, but for the exhibition she used glass and light to create Ḱanḱagawí (The Seam of Heaven), an installation that beckons you into the exhibition.'},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
