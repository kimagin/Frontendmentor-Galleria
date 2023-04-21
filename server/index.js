const express = require('express')
const app = express()

const PORT = 4000
app.listen(PORT,(request,response)=>{
  console.log(`server is running on port ${PORT}!`)
})