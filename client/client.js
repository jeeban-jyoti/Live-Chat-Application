const express = require('express')
const bodyParser = require('body-parser')
const {onRoomCreate, joinRandomRoom} = require('./database')

const port = 4000
const app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/css', express.static(__dirname + '/public/css'))

app.get('/lobby', (req, res)=>{
    res.render('lobby')
})

app.get('/chatroom/:roomLink', (req, res)=>{
    var code = (req.url).substring(10,16)
    res.render('chatroom', {roomLink : code})
})

app.post('/lobby', urlencodedParser, function (req, res) {
    var arr = [req.body.chatMethod1, req.body.chatMethod2, req.body.chatMethod3, req.body.roomLink]    
    console.log(arr)
    if(req.body.chatMethod1 == 'on'){
        var url = req.body.roomLink
        res.redirect('/chatroom/' + url)

    }
    else if(req.body.chatMethod2 == 'on'){
        if(req.body.public == 'on'){
            onRoomCreate(res, true)
        }
        else{
            onRoomCreate(res, false)
        }
    }
    else if(req.body.chatMethod3 == 'on'){
        joinRandomRoom(res)
    }
    else{
        res.send("choose any option")
    }
})

app.get('/socket.io/socket.io.js',(req, res)=>{
    res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js')
    console.log(__dirname)
})

app.get('/socket.io/socket.io.js.map',(req, res)=>{
    res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js.map')
    console.log(__dirname)
})

app.listen(port, ()=>{
    console.log("started on", port )
})