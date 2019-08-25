const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var subjectSchema = new mongoose.Schema({
    groupName: {
        type: String,
    },
    subjectName: {
        type: String,
    }
});

mongoose.model('Subject', subjectSchema);