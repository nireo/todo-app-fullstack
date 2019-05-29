require("dotenv").config()
const express = require("express")
const Item = require("./models/item")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())


app.get("/", (req, res) => {
    Item.find({})
        .then(items => {
            res.json(items.map(item => item.toJSON()))
        })
})




app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})