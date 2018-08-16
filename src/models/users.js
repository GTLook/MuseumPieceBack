const db = require('../../db/knex')
const bcrypt = require('bcrypt-as-promised')
const SHORTID = require('shortid')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getOneByEmail(user_email){
  return (
    db('users')
    .where({ user_email })
    .first()
  )
}

function getOneById(id){
  return (
    db('users')
    .where({ id })
    .first()
  )
}

function getAll(){
  return (
    db('users')
    .select('id','user_first_name','user_last_name')
  )
}

function create({user_email, user_password, user_first_name, user_last_name}){
  return getOneByEmail(user_email)
  .then(function(data){
    if(data) throw { status: 400, message:'User already exists'}

    return bcrypt.hash(user_password, 10)
  })
  .then(function(hashedPassword){
    return (
      db('users')
      .insert({ user_email, user_shortid:SHORTID.generate(), user_hashed_password: hashedPassword, user_first_name, user_last_name })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.password
    return data
  })
}

module.exports = {
  getOneByEmail,
  getOneById,
  create,
  getAll
}
