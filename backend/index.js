const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3001

app.listen(3000, () => {
    console.log(`server running on port ${port}`)
})