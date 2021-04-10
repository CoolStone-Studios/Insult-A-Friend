const { port } = require('./config.json')
const { SFW, NSFW } = require('./insults.json')
const express = require('express')
const send = require('./sendfunction')

const app = express()
app.listen(port, () => console.log('Listening @ port ' + port +' \n \n'))
app.use(express.static('frontend'))
app.use(express.json([{limit: '1mb'}]))

module.exports.app = app



app.post('/insult', (req, res) => {
    try{

        let array
        
        if(req.headers.allowNSFW === true){
        
        const newArray = new Array()
        
        newArray.push(SFW.toString())
        newArray.push(NSFW.toString())
        
        array = newArray
        
        }else{
        array = SFW
        }
        
        const insult = array[Math.floor(Math.random() * array.length)];
        
        send(req.headers.from,req.headers.to,insult)

        res.sendStatus(200)
        }catch {
        res.sendStatus(500)
        }
})


app.get('/config', (req,res) => {res.send(require('./config.json'))})

console.clear()