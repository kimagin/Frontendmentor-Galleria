
import express from 'express'
import bodyParser from 'body-parser'
import dataBaseRoute from './routes/info.js'


const app = express()
app.use(bodyParser.json())
app.use('/database',dataBaseRoute)

app.use(express.static('public'));




app.get('/',(req,res)=>{
  res.send(`
  Welcome to the Galleria Server...
  Find the information about the assets in "./image.json"
  `)
})



const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}!`)
})





