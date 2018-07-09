const TABLE_NAME = 'user_comments'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('user_favorites_shortid').notNullable()
    table.integer('user_id').references('users.id')
    table.integer('art_id').references('art.id')
    table.string('user_comments').defaultTo('')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
