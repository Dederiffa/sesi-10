const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'kuliah',
});

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to MySQL database');
    } else {
        console.log('connected to MySQL database');
    }
});

module.exports = connection;
