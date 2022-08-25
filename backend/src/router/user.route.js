module.exports = (app) => {
    const express = require('express')
    const router = express.Router()
    const controller = require('../controllers/user.controller')

    router.post('/add-user', controller.createUser)
    router.get('/get-user', controller.getuser)


    app.use('/', router)
}