const project = require('../models/project');

module.exports.home = async (req, res) => {
    let projects = await project.find({});
    // console.log(projects);
    res.render('projectDetails.ejs', { projects })
    // console.log(path)
    // res.render('projectDetails');
}


//Route for Issues by id
module.exports.issueId =  async (req, res) => {
    // res.send(req.params.id);
    let projects = await project.findOne({
        _id: req.params.id
    }).then(projects => {
        res.render('issuePage.ejs', { projects })
    }).catch(err => console.log(err))

}

module.exports.edit =  async (req, res) => {
    let projects = await project.findOne({
        _id: req.params.id
    }).then(projects => {
        res.render('addissue.ejs', { projects })
    }).catch(err => console.log(err))

}


//editing issue
module.exports.addIssue = async (req, res) => {
    // res.send(req.params.id);
    let projects = await project.findOne({
        _id: req.params.id
    }).then(projects => {
        projects.Issue = req.body.Issue;

        projects.save().then(() => {
            res.render('issuePage.ejs', { projects });
        }).cathc(err => console.log(err))
    }).catch(err => console.log(err))
}

