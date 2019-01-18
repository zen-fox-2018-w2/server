const Book = require("../models/Book")
const jwt = require('jsonwebtoken');


module.exports = {
    add_book: (req, res) => {
      console.log(req.file, "=============================");
      if (req.headers.token) {
        var decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET );
        let newData = {
          title: req.body.title,
          description: req.body.description,
          creator: decoded._id,
          cover: "https://visual-integrity.com/wp-content/uploads/2016/02/pdf-page.png",
          file: req.file.cloudStoragePublicUrl
        }
        Book.create(newData)
        .then((result) => {
          res.status(201).json(result);
        }).catch((err) => {
          res.status(500).json({
            message: 'Internal server error'
          })
        });
      }
      else {
        res.status(401).json({
          message: "Unautorized"
        })
      }
    },

    get_books: (req, res) => {
      Book.find()
          .then((result) => {
            res.status(201).json(result);
          }).catch((err) => {
            res.status(400).json({
                message: 'Internal server error'
            })
          })
    },
    delete_ownCollection: (req, res) => {
        console.log(req.params.id)
        Book.findByIdAndDelete(req.params.id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}
