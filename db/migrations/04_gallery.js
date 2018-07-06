const TABLE_NAME = 'gallery'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, table=>{
    table.increments()
    table.string('gallery_shortid').notNullable()
    table.integer('museum_id').references('museum.id')
    table.integer('artist_id').notNullable().references('artist.id')
    table.string('gallery_picture').notNullable()
    table.string('gallery_title').notNullable()
    table.text('gallery_text').notNullable().defaultTo('')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
