var express = require('express');
var mysql = require('mysql');
var dbConfig = require('../../../config/mysql');


var router = express.Router();


router.get('/',function(req,res,next){

    var pool = mysql.createConnection(dbConfig);
    pool.connect();
    const user_id = req.query.id
    var sql = ' "DELETE FROM users WHERE user_id = ?';
    pool.query(sql, user_id,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log('用户'+num+'删除');
            // result = data
        }
    })

  
    res.send(result);
    pool.end();
    console.log('删除');
})


module.exports = router;