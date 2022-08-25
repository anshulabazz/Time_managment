const mongoose = require('mongoose')
const express = require('express')
const app = express()
const timesheetschema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    startdate: {
        type: Date
    },
    enddate: {
        type: Date
    }

}, { timestamps: true })

const Timesheet = mongoose.model('TimeSheet', timesheetschema)

module.exports = Timesheet