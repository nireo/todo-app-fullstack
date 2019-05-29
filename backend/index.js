require("dotenv").config()
const express = require("express")
const Item = require("./models/item")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT

app.get("/", (req, res) => {
    Item.find({})
        .then(items => {
            res.json(items.map(item => item.toJSON()))
        })
})




app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})