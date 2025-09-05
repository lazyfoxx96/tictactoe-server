var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var saltRounds = 10;
const {ObjectId} = require('mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('하이');
});

// 회원가입
router.post('/signup', async function(req, res, next){
  try{
    var username = req.body.username;
    var password = req.body.password;
    var nickname = req.body.nickname;

    // 입력값 검증
    if(!username || !password || !nickname) {
      return res.status(400).json({ message : 'All fields are required.'});
    }

    // DB연결
    var database = req.app.get('database');
    var users = database.collection('users');

    //중복된 username 확인
    var existingUser = await users.findOne({ username: username });
    if(existingUser){
      return res.status(409).json({ message: 'Username already exists.'});
    }

    // 비밀번호 암호화
  }
});

module.exports = router;
