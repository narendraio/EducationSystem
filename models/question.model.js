const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autopopulate = require('mongoose-autopopulate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var QuestionSchemaOptions = {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
};

var questionsSchema = new Schema({
    correctAnswer: {
        type: String,
    },
    difficultylevel: {
        type: String,
    },
    explaination: {
        type: String,
    },
    groupName: {
        type: String,
    },
    hint: {
        type: String,
    },
    marks: {
        type: String,
    },
    nagativemarks: {
        type: String,
    },
    option1: {
        type: String,
    },
    option2: {
        type: String,
    },
    option3: {
        type: String,
    },
    option4: {
        type: String,
    },
    option5: {
        type: String,
    },
    option6: {
        type: String,
    },
    question: {
        type: String,
    },
    questionType: {
        type: String,
    },
    questionfillintheblack: {
        type: String,
    },
    questionsubjective: {
        type: String,
    },
    subject: {
        type: String,
    },
    truefalseans: {
        type: String,
    },
    status: {
        type: String,
    },
    examid: {
        type: Schema.Types.ObjectId, ref: 'Exam', autopopulate: true
    }
}, QuestionSchemaOptions);

questionsSchema.plugin(autopopulate);

mongoose.model('Questions', questionsSchema);