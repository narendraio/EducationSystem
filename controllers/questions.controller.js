const mongoose = require('mongoose');
const _ = require('lodash');

const Questions = mongoose.model('Questions');

module.exports.addQuestions = (req, res, next) => {
    console.log("calling from here");
    console.log
    var questions = new Questions();
    questions.correctAnswer = req.body.correctAnswer;
    questions.difficultylevel = req.body.difficultylevel;
    questions.explaination = req.body.explaination;
    questions.groupName = req.body.groupName;
    questions.hint = req.body.hint;
    questions.marks = req.body.marks;
    questions.nagativemarks = req.body.nagativemarks;
    questions.option1 = req.body.option1;
    questions.option2 = req.body.option2;
    questions.option3 = req.body.option3;
    questions.option4 = req.body.option4;
    questions.option5 = req.body.option5;
    questions.option6 = req.body.option6;
    questions.question = req.body.question;
    questions.questionType = req.body.questionType;
    questions.questionfillintheblack = req.body.questionfillintheblack;
    questions.questionsubjective = req.body.questionsubjective;
    questions.subject = req.body.subject;
    questions.truefalseans = req.body.truefalseans;
    questions.status = req.body.status;
    questions.examid = req.body.examid;
    console.log(questions);
    questions.save((err, doc) => {
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

module.exports.getQuestionsList = (req, res, next) =>{
    console.log("Hello");
    Questions.find({},
        (err, questions) => {
            if (!questions)
                return res.status(404).json({ status: false, message: 'Questions record not found.' });
            else
                return res.status(200).json({ status: true, questions :questions });
        }
    );
}