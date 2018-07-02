exports.seed = function(knex, Promise) {
  //cleans out seeded tables in reverse order.
  const tablesToClean = ['users','museum','artist','gallery','art','user_favorites'].reverse()

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

}
