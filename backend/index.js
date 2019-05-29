require("dotenv").config()
const express = require("express")
const Item = require("./models/item")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(cors())


app.get("/", (req, res) => {
    Item.find({})
        .then(items => {
            res.json(items.map(item => item.toJSON()))
        })
        .catch(error => {console.log(error)})
})

app.post("/", (req, res) => {
    const body = req.body

    if (body === undefined) {
        return res.status(400).json({error: "missing content"})
    }

    const item = new Item({
        name: body.name,
        itemTime: body.itemTime
    })

    item.save()
        .then(savedItem => {
            return savedItem.toJSON()
        })
        .then(savedAndFormatted => {
            res.json(savedAndFormatted)
        })
        .catch(error => {console.log(error)})
})




app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})