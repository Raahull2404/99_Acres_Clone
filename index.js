const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 4000
app.use(express.urlencoded({ extended: true }))
app.use(express.json)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/99_Acres_Clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(PORT, function () {
    console.log("API Server is listening on port ${PORT}")
})