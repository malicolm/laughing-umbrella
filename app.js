import express from "express"

const app = express()
const port = 5000
app.use(express.static('public'))

app.use('/', express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})