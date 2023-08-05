#!/usr/bin/node
const express = require('express');
const mysql = require('mysql');

const static = require('serve-static')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



app.use(express.static(path.join(__dirname,'views')));

express.applic


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'./', 'views', 'MAIN.html'));
});


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'./','views', 'REGISTER.html'));
});

app.get('/LOGIN', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'views','LOGIN.html'));
});
 



//디비 정보 불러오는 내용
const dbConfig = {
	host: 'localhost', 
	user: 'OppSpark',
	port: 3306,
	password: '1515', 
	database: '23_S', 
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






  //회원 가입 구현

  //app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
	console.log('회원가입 페이지');
	const { re_email, re_name, re_pw } = req.body;
  
	// MySQL에 회원 정보 삽입
	const sql = 'INSERT INTO user_info (user_id, user_name, user_pw) VALUES (?, ?, ?)';
	connection.query(sql, [re_email, re_name, re_pw], (err, result) => {
	  if (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to register' });
	  } else {
		res.json({ message: 'Successfully registered' });
	  }
	});
  });
  


  






  //로그인 구현

  app.post('/login', (req, res) => {
    if (req.session.user ? req.session.user.id == 'test' : false) {
        res.redirect('/');
    }
    else if(req.body.id == 'test' && req.body.pw == '1234') {
        req.session.user = {
            id: req.body.id,
        };

        res.setHeader('Set-Cookie', ['user=' + req.body.id]);
        res.redirect('/');
    }
    else {
        res.redirect('/login');
    }
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





/* app.get('/api', (req, res) => {
	connection.query('SELECT * FROM tb1', (error, rows) => {
		if (error) throw error;
		res.send(rows);
	});
});  */


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
