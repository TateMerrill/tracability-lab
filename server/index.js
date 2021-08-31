const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4545

var Rollbar = require("rollbar")
var rollbar = new Rollbar({
    accessToken: '',
    captureUncaught: true,
    captureUnhandleRejections: true,
    endpoint: ""
});




app.use(express.json())


app.get('/', (req, res) => {
    rollbar.log("Hello World!")
    res.sendFile(path.join(__dirname, '../public/index.html'))
})






app.use(express.static('public'))
app.listen(port, () => console.log(`Number ${port}, it is time to run for your life. Good luck and God speed!`))