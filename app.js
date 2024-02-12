const {addDays} = require('date-fns')
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  let now = new Date()
  let result = addDays(now, 100)
  res.send(
    `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`,
  )
})

module.exports = app
app.listen(3000)
