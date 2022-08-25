module.exports = (app) => {
    const express = require('express')
    const router = express.Router()
    const controller = require('../controllers/timesheet.controller')

    router.post('/add-timesheet', controller.createtimesheet)
    router.get('/get-userdata', controller.findbyuser)
    router.get('/get-secdate', controller.getselecteddatedata)
    router.get('/get-datedata', controller.findbydate)
    
    app.use('/', router)
}