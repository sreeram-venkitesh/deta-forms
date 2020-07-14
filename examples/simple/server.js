//run npm install after copying this file to your server.js/index.js file
const express = require('express')
const { check, validationResult, matchedData } = require('express-validator');
const bodyParser = require('body-parser')

const app = express()

//body-parser is used to access req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.render('index'))

app.post('/write',
    [
    check("name"),
    check("email"),
    check("answer"),
    check("optionSelected")   
    ],
    (req,res) => {
    
    //validation
    const errors = validationResult(req);
    const data = matchedData(req);
    
    console.log(data)

    const deta = new Deta('project_key')
    const db = deta.Base('form_db')
    
    db.put({
        name : req.body.name,
        email : req.body.email,
        answer : req.body.answer,
        option : req.body.optionSelected
    })

    res.redirect("/") //replace the path to where you want to redirect instead of /
})

const PORT = 3000

if(!process.env.DETA_RUNTIME){
    app.listen(PORT,()=>{
        console.log('Listening to local port')
    })
}
// export 'app'
module.exports = app