const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var questionsSchema = new mongoose.Schema({
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
    }
});

mongoose.model('Questions', questionsSchema);