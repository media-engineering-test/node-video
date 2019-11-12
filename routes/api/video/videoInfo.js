var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../../../config/mysql');

var router = express.Router();


router.get('/',function(req,res,next){


    var pool = mysql.createConnection(dbConfig);
    pool.connect();

    var sql = 'SELECT * FROM  video_info';
    pool.query(sql, function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log('用户信息成功');
            result = data
        }
    })
    pool.end();

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    
    res.send(result);
   
    console.log('用户信息');
})

module.exports = router;

