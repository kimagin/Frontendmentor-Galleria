
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dataBaseRoute from './routes/info.js'


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/database',dataBaseRoute)

app.use(express.static('public'));

app.use('/assets', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/asset', express.static('public/assets'));

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





