'use strict';

const mysql = require('mysql');

const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'fullstack'
});

db.connect(function(err){
	if(err) 
		throw err;
	else
		console.log("Conexion con base de datos realizada");
});

module.exports = db;
