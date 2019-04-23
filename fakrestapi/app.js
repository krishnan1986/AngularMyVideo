const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())

//app.use(bodyParser.urlencoded({ extended: false }))
// res.setHeader('Access-Control-Allow-Origin','*') 
var videos =[
    {
        "title": "Sadhguru and Physics",
        "url": "https://www.youtube.com/watch?v=pAluQXDTM9g"
      },
      {
        "title": "Angular 6 Tutorial",
        "url": "https://www.youtube.com/watch?v=BoxuTR4ruUs"
        
      },
      {
        "title": "Understanding Javascript",
        "url": "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts"
        
      }
]


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/videos',(req, res) => {res.json(videos)})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))