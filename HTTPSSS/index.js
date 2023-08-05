#!/usr/bin/node
const express = require('express');
const mysql = require('mysql');
//const dbconfig = require('./config/dbinfo.js');
//const connection = mysql.createConnection(dbconfig);
const static = require('serve-static')
const app = express();
const port = 3000;

const path = require('path');
const cors = require('cors');




const dbConfig = {
	host: 'localhost', // 데이터베이스 호스트 주소
	user: 'OppSpark', // 데이터베이스 사용자명
	password: 'y1515', // 사용자 비밀번호
	database: '23_S', // 데이터베이스 이름
  };
  
  // MySQL 데이터베이스 연결 설정
  const connection = mysql.createConnection(dbConfig);
  
  // 데이터베이스 연결 확인
  connection.connect((err) => {
	if (err) {
	  console.error('Error connecting to database: ', err);
	  return;
	}
	console.log('Connected to database!');
  });









/* 
const dbconfig = require('./config/dbdata.json') 
const pool = mysql.createPool({
	connectionLimit: 10,
	host: dbconfig.host,
	user: dbconfig.user,
    password: dbconfig.password,
	database: dbconfig.database,
	debug:false

});

*/



router.post('/REGISER',(req, res)=>{
	const user_id = req.body.re_email;
	const user_name = req.body.re_name;
	const user_pw = req.body.re_pw;

	var sql = "INSTER INTO user_info (user_id, user_name, user_pw) VALUES (?,?,?)";
	con.query(sql, [re_emai, re_name,re_pw], function (err, result){
		if(err){
			res.json({message:false})
		}else{
			res.json({message:name})
		}
	});
});
//app.use(express.urlencoded({extended:true}))
//app.use(express.json())


//app.post('/REGISTER',(req, res) => { /* post로 들어오는 명령어는 여기서 처리 함 회원가입 기능 */

//const user_id = req.body.re_email;
//const user_name = req.body.re_name;
//const user_pw = req.body.re_pw;

/*
pool.getConnection((err,conn)=> {

	if(err){
		conn.release();
		console.log('Mysql get connectionn error');
		return;
	}
	console.log('mysql connect');



	const exec = conn.query('insert into res (user_id, user_name, user_pw) values (?.?.?);',
		[user_id, para_name, user_pw],
		(err, result)=>{
			conn.release();
			console.log('what sql?'+ exec.sql)

			if(err){
				console.log('sql error')
				console.dir(err);
				return;
				
		}
			if (result){
				console.dir(result)

				res.writeHead('200', {Conn})

			}
		}
		)
})

})
*/

//require('')



app.use(express.static(path.join(__dirname,'views')));

/* app.get('/api', (req, res) => {
	connection.query('SELECT * FROM tb1', (error, rows) => {
		if (error) throw error;
		res.send(rows);
	});
});  */



express.applic


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'./', 'views', 'MAIN.html'));
});


app.get('/REGISTER', function(request, response) {
    response.sendFile(path.join(__dirname + '/register.html'));
});
 

//app.get('/login', (res, ree) => {
//	res.sendFile(pach.join(__dirname,'./', 'views', 'LOGIN.html'));
//});






app.use(
	cors({
		origin: 'http://3.34.130.34:3000',
		credentials:true,
	})
);

app.use(
	cors({
		origin: 'http://175.112.124.90:3000',
		credentials:true,
	})
);



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
