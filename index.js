const bodyParser = require('body-parser');
const express = require('express');
const port = 8000;
const path = require('path');
const bodyparser = ('body-parser');
const methodOverride = require('method-override');


const app = express();
const mongoose = require('mongoose');

//parsing middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//middleware 
app.use(methodOverride('_method'));

// const adminPassword = encodeURIComponent(process.env.iF647pa1LuDT6UPt)
//Database 
const url = "mongodb+srv://garvitgaur902:12345@cluster0.vx9ef5p.mongodb.net/IssueTracker?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Mongo is ON!!"))
    .catch(err => console.log(err))

//Import model
const project = require('./models/project');


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//using ccs as static file
app.use(express.static('./assets'));

// app.post('/createProject', (req, res) => {
//     return res.redirect('/')
// })

//Route to different pages


app.get('/NewProjects', (req, res) => {
    // console.log(path)
    res.render('NewProjects');
})


app.get('/issuePage', (req, res) => {
    // console.log(path)
    res.render('issuePage');
})

//route to save new project
app.post('/createProject', (req, res) => {
    // console.log(path)
    // res.send(req.body);

    const data = new project({
        Name: req.body.Name,
        Description: req.body.Description,
        Author: req.body.Author,
        Issue: req.body.Issue
    })
    data.save().then(() => {
        return res.redirect('/');
    }).catch(err => {
        console.log(err)
        return res.redirect('back')
    });
})



//Route for edit issue




app.use('/', require('./routes'));

//created our server
app.listen(port, () => { console.log("server is up and running!!") });
