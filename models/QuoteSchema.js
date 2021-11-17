const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Enter your name"]},
    phone: {type: String, required: [true, "Enter your phone"]},
    email: {type: String},
    subject: {type: String},
    message: {type: String}
})

module.exports = mongoose.models.Quote || mongoose.model("Quote", QuoteSchema)