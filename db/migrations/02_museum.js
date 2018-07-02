const TABLE_NAME = 'museum'

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable(TABLE_NAME, function(table){
      table.increments()
      table.string('museum_shortid').notNullable()
      table.string('museum_name').notNullable()
      table.string('museum_address').defaultTo('')
      table.string('museum_city').defaultTo('')
      table.string('museum_state').defaultTo('')
      table.string('museum_postalcode').defaultTo('')
      table.string('museum_placeid').defaultTo('')
      table.string('museum_picture').defaultTo('')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
