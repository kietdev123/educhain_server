const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/blogs', (req, res) => {
    res.status(200).json({
        message : 'Get blogs successfully',
        data :[
            {
                'title' : '1',
                'image' : '2',
                'discrible' : '2',
                'content' : '232',
            }
        ],
    });
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})