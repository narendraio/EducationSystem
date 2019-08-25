const mongoose = require('mongoose');
const _ = require('lodash');

const Subject = mongoose.model('Subject');

module.exports.addSubject = (req, res, next) => {
    console.log("calling from here");
    var subject = new Subject();
    subject.groupName = req.body.groupName;
    subject.subjectName = req.body.subjectName;
    subject.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Something went wrong.']);
            else
                return next(err);
        }

    });
}

module.exports.getSubjectList = (req, res, next) =>{
    Subject.find({},
        (err, subject) => {
            if (!subject)
                return res.status(404).json({ status: false, message: 'Subject record not found.' });
            else
                return res.status(200).json({ status: true, subject :subject });
        }
    );
}