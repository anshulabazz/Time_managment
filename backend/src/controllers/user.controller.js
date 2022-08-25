const Users = require('../models/user.model')
exports.createUser =async (req, res) => {
    const users = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    })
    const create = await users.save()
    res.status(200).send(create)
}
exports.getuser = (req, res) => {
    Users.find().then((data) => {

        res.status(200).send(data)
    })
}