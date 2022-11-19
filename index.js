const express = require("express")
const cors = require('cors')

const app = express()

const inspector = require("./api/inspector")

const PORT  = process.env.PORT || 5050

app.use(cors())
app.use(express.json())
app.use("/api/inspector", inspector)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})