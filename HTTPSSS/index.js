#!/usr/bin/node
const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config/dbinfo.js');
const connection = mysql.createConnection(dbconfig);

const app = express();
const port = 3000;

const path = require('path');
const cors = require('cors');



const express = require('express'); 
app.use(express.static(path.join(__dirname,'views')));




app.get('/api', (req, res) => {
	connection.query('SELECT * FROM tb1', (error, rows) => {
		if (error) throw error;
		res.send(rows);
	});
});


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'./', 'views', 'MAIN.html'));
});

app.get('/login', (res, ree) => {
	res.sendFile(pach.join(__dirname,'./', 'views', 'LOGIN.html'));
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
