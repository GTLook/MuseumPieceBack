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

//////////////////////////////////////////////////////////////////////////////
// Create a user
//
// 1. Check to see if user already exists
//   a. if so, return a 400 with appropriate error message
// 2. Hash password
// 3. Insert record into database
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////

function create({user_email, user_password, user_first_name, user_last_name}){
  // check to see of user already exists
  return getOneByEmail(user_email)
  .then(function(data){
    // if user already exists, return 400
    if(data) throw { status: 400, message:'User already exists'}

    // hash password
    return bcrypt.hash(user_password, 10)
  })
  .then(function(hashedPassword){

    //picture = picture ? picture : 'http://www.placekitten.com/50/50'

    // 3. Insert record into database
    return (
      db('users')
      .insert({ user_email, user_shortid:SHORTID.generate(), user_hashed_password: hashedPassword, user_first_name, user_last_name })
      .returning('*')
    )
  })
  .then(function([ data ]){
    // 4. strip hashed password away from object
    delete data.password
    // 5. "return/continue" promise
    return data
  })
}

module.exports = {
  getOneByEmail,
  getOneById,
  create,
  getAll
}
