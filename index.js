const express = require("express")

const inspector = require("./api/inspector")

const app = express()

const PORT  = process.env.PORT || 5050

app.use(express.json())
app.use("/api/inspector", inspector)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})