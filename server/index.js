const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const pino = require("express-pino-logger")()

const corsOptions = {
  origin: "http://localhost:3000"
}
const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World"
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }))
})

app.listen(4000, () =>
  console.log("Express server is running on localhost:4000")
)
