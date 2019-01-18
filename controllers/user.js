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
      User
      .findOne({ email: req.body.data.email })
      .then(user => {
          if (user) {
              if (dcrypt(req.body.data.password, user.password)) {
                  let token = jwt.sign({
                          email: user.email,
                      }, process.env.JWT_SECRET)
                      res.status(200).json({ access_token: token })
              } else {
                  res.status(400).json({ msg: 'Username/password is wrong!' })
              }
          } else {
              res.status(400).json({ msg: 'Username/password is wrong!' })
          }
      })
      .catch(err => {
          console.log(err)
          res.status(500).json(err)
      })
   }
}