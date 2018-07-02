const TABLE_NAME = 'art'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, table=>{
    table.increments()
    table.string('art_shortid').notNullable()
    table.integer('gallery_id').references('gallery.id')
    table.string('art_title').notNullable().defaultTo('')
    table.text('art_text').notNullable().defaultTo('')
    table.string('art_picture_url').notNullable().defaultTo('')
    table.string('art_audio').notNullable().defaultTo('')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
