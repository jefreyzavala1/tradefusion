const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb+srv://jefreyzavala:ztf1HPbttF8vJebS@cluster0.js7ckre.mongodb.net/tradefusion?retryWrites=true&w=majority")

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}`);
})

module.exports = mongoose