const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var examSchema = new mongoose.Schema({
    nameOfExam: {
        type: String,
    },
    passingPercentage: {
        type: Number,
    },
    instruction: {
        type: String,
    },
    examDuration: {
        type: String,
    },
    attemptCount: {
        type: String,
    },
    startDate: {
        type: Date, default: Date.now
    },
    endDate: {
        type: Date, default: Date.now
    },
    showAnswerSheet: {
        type: Boolean,
    },
    group: {
        type: String,
    },
    negativeMarking: {
        type: Boolean,
    },
    randomQUestions: {
        type: Boolean,
    },
    paidExam: {
        type: Boolean,
    },
    browserTolerance: {
        type: Boolean,
    },
    expiryDays: {
        type: Number,
    },
    resultAfterFinish: {
        type: Boolean,
    },
    instantResult: {
        type: Boolean,
    },
    mode: {
        type: String,
    },
    optionShuffle: {
        type: Boolean,
    }
});

mongoose.model('Exam', examSchema);