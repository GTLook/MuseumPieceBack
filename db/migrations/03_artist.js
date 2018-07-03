const TABLE_NAME = 'artist'

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable(TABLE_NAME, function(table){
      table.increments()
      table.string('artist_shortid').notNullable()
      table.string('artist_name').defaultTo('')
      table.text('artist_bio').defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
