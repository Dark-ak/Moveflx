const express = require('express')
const app = express()
const cors = require("cors")
const discover = require("./routes/discover")
const trending = require("./routes/trending")
const port = 3000

app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))

app.use("/discover", discover)
app.use("/trending", trending)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))