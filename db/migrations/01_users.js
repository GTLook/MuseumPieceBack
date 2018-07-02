const TABLE_NAME = 'users'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('user_shortid').notNullable()
    table.string('user_first_name').notNullable().defaultTo('')
    table.string('user_last_name').notNullable().defaultTo('')
    table.string('user_email').notNullable().defaultTo('')
    table.string('user_hashed_password').notNullable().defaultTo('')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
