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

const dbconfig = require('./config/dbdata.json') 
const pool = mysql.createPool({
	connectionLimit: 10,
	host: dbconfig.host,
	user: dbconfig.user,
    password: dbconfig.password,
	database: dbconfig.database,
	debug:false

});
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post('/REGISTER',(req, res) => { /* post로 들어오는 명령어는 여기서 처리 함 회원가입 기능 */

const user_id = req.body.re_email;
const user_name = req.body.re_name;
const user_pw = req.body.re_pw;
//const re_rpw = req.body.id;
//const paraId = req.body.id;

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
