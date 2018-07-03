const db = require('../../db/knex')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = () => {
  return (
    db('museum')
  )
}

const getOne = (museumId ) => {
  return (
    db('museum')
    .where({ museum_id: museumId })
    .returning('*')
  )
}
//
// const create = (snackId, userId, {title, text, rating}) => {
//   return (
//     db('reviews')
//     .insert({title, text, rating, snack_id: snackId, user_id: userId})
//     .returning('*')
//   )
// }
//
// const modify = (snackId, reviewId, userId, {title, text, rating}) => {
//   return (
//     db('reviews')
//     .where({ id: reviewId })
//     .update({title, text, rating, snack_id: snackId, user_id: userId})
//     .returning('*')
//   )
// }
//
// const remove = (reviewId) => {
//   return (
//     db('reviews')
//     .where({ id: reviewId })
//     .first()
//     .del()
//     .returning('*')
//   )
// }


module.exports = { getAll, getOne}
