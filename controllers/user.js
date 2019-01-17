const User = require('../models/User')
const { dcrypt } = require('../helpers/encrypts')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  register: (req, res) => {
    let obj = {email, password} = req.body
    User
    .create(obj)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  },
  
   userLogin: (req, res) => {

   },

}