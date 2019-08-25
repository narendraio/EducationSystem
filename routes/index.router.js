const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlSubject = require('../controllers/subject.controller');
const ctrlQuestions = require('../controllers/questions.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/getUserList', ctrlUser.getUserList);

router.post('/addSubject',ctrlSubject.addSubject);
router.get('/getSubjectList',ctrlSubject.getSubjectList);

router.post('/addQuestions',ctrlQuestions.addQuestions);
router.get('/getQuestionsList',ctrlQuestions.getQuestionsList);



module.exports = router;



