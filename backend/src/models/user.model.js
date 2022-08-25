const mongoose = require('mongoose')
const express = require('express')
const app = express()
const userschema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    }

}, { timestamps: true })

const Users = mongoose.model('Users', userschema)

module.exports = Users