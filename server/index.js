const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4545

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '9403493b09e14b0f9dd20307522ce876',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");




app.use(express.json())


app.get('/', (req, res) => {
    rollbar.log("Hello World!")
    res.sendFile(path.join(__dirname, '../public/index.html'))
})






app.use(express.static('public'))
app.listen(port, () => console.log(`Number ${port}, it is time to run for your life. Good luck and God speed!`))