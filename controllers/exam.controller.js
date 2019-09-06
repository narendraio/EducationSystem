const mongoose = require('mongoose');
const _ = require('lodash');

const Exam = mongoose.model('Exam');

module.exports.addExam = (req, res, next) => {
    console.log("calling from here");
    var exam = new Exam();
    exam.nameOfExam = req.body.nameOfExam;
    exam.passingPercentage = req.body.passingPercentage;
    exam.instruction = req.body.instruction;
    exam.examDuration = req.body.examDuration;
    exam.attemptCount = req.body.attemptCount;
    exam.startDate = req.body.startDate;
    exam.endDate = req.body.endDate;
    exam.showAnswerSheet = req.body.showAnswerSheet;
    exam.group = req.body.group;
    exam.negativeMarking = req.body.negativeMarking;
    exam.randomQUestions = req.body.randomQUestions;
    exam.paidExam = req.body.paidExam;
    exam.browserTolerance = req.body.browserTolerance;
    exam.expiryDays = req.body.expiryDays;
    exam.resultAfterFinish = req.body.resultAfterFinish;
    exam.instantResult = req.body.instantResult;
    exam.mode = req.body.mode;
    exam.optionShuffle = req.body.optionShuffle;
    exam.save((err, doc) => {
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

module.exports.getExamList = (req, res, next) =>{
    Exam.find({},
        (err, exam) => {
            if (!exam)
                return res.status(404).json({ status: false, message: 'exam record not found.' });
            else
                return res.status(200).json({ status: true, exam :exam });
        }
    );
}

module.exports.getUpComingExams = (req, res, next) =>{
    Exam.find({"startDate":{"$gte":new Date()}},
        (err, exam) => {
            if (!exam)
                return res.status(404).json({ status: false, message: 'exam record not found.' });
            else
                return res.status(200).json({ status: true, exam :exam });
        }
    );
}