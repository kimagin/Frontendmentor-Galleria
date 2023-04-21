
import express from 'express'
import bodyParser from 'body-parser'
import dataBaseRoute from './routes/info.js'


const app = express()
app.use(bodyParser.json())
app.use('/database',dataBaseRoute)

app.use(express.static('public'));




app.get('/',(req,res)=>{
  res.send('Welcome to the Galleria Server...')
})



const PORT = 4000
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}!`)
})




// const images = ['arnolfini-portrait','girl-with-pearl-earring',
// 'guernica','lady-with-an-ermine','mona-lisa','penitent-magdalene','starry-night'
// ,'the-basket-of-apples','the-boy-in-the-red-vest','the-great-wave-off-kanagawa','the-night-cafe','the-sleeping-gypsy','the-storm-on-the-sea-of-galilee','the-swing','van-gogh-self-portrait'
// ]
// const data = []

// images.forEach(img =>{
//   data.push({
//     "name": `${img.replace(/-/g, ' ')}`,
//     "thumbnail": `/assets/${img}/artist.jpg`,
//     "gallery": `/assets/${img}/gallery.jpg`,
//     "heroLarge": `/assets/${img}/hero-large.jpg`,
//     "heroSmall": `/assets/${img}/hero-small.jpg`,
//     "artist": `/assets/${img}/artist.jpg`
//   })
// })

// const jsonFile = JSON.stringify(data)

// console.log(jsonFile)



