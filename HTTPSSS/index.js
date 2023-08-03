#!/usr/bin/node
const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config/dbinfo.js');
const connection = mysql.createConnection(dbconfig);

const app = express();
const port = 3000;

const path = require('path');
const cors = require('cors');



const express = require('express');  /* CSS JPG를 허용하는 public folder */
//public이라는 폴더의 클라이언트 접근 허용 (미들웨어)
app.use(express.static('public'));





app.get('/api', (req, res) => {
	connection.query('SELECT * FROM tb1', (error, rows) => {
		if (error) throw error;
		res.send(rows);
	});
});


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'./', '23_HTML', 'MAIN.html'));
});

app.get('/login', (res, ree) => {
	res.sendFile(pach.join(__dirname,'./', '23_HTML', 'LOGIN.html'));
});

app.use(
	cors({
		origin: 'http://3.34.130.34:3000',
		credentials:true,
	})
);


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
