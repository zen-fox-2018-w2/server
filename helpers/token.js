const jwt = require('jsonwebtoken')
module.exports = {
    create_token: (data) => {
        return jwt.sign(data, process.env.JWT_SCRET)
    },
    verify_token: (data, callback) => {
        jwt.verify(data, process.env.JWT_SCRET, (err, decoded) => {
            if (err) {
                callback(err, null)
            }
            else {
                callback(null, decoded)
            }
        })
    }
}