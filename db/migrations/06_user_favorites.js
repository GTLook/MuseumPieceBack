const TABLE_NAME = 'user_favorites'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('user_favorites_shortid').notNullable()
    table.integer('user_id').references('users.id')
    table.integer('art_id').references('art.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
