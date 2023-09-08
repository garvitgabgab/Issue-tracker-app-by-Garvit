

//Import model
const project = require('../models/project');

module.exports.home =  async (req, res) => {

    let projects = await project.find({});
    // console.log(projects);
    res.render('home', { projects })
    // console.log(path)
    // project.find({}).then(project => {
    //     // res.render('home');
    //     console.log(project);
    //     res.render('home', { project })

    // }).catch(err => console.log(err));



}