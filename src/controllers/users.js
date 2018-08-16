const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function create(req, res, next){
  if(!req.body.user_email){
    return next({ status: 400, message: 'Bad email'})
  }
  if(!req.body.user_password){
    return next({ status: 400, message: 'Bad password'})
  }
  if(!req.body.user_first_name){
    return next({ status: 400, message: 'Include First Name'})
  }
  if(!req.body.user_last_name){
    return next({ status: 400, message: 'Include Last Name'})
  }

  userModel.create(req.body)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

const getAll = (req, res, next) => {
  userModel.getAll()
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

module.exports = {
  create,
  getAll
}
