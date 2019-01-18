const Book = require("../models/Book")


module.exports = {
    add_book: (req, res) => {
        let newData = {
            title: req.body.title,
            description: req.body.description,
            creator: '5c08731b9bb6850798aac569',
            cover: "https://visual-integrity.com/wp-content/uploads/2016/02/pdf-page.png",
            file: req.file.cloudStoragePublicUrl
        }

        Book.create(newData)
            .then((result) => {
                res.status(201).json(result);
            }).catch((err) => {
                res.status(400).json({
                    message: 'Internal server error'
                })
            });
    },
}
