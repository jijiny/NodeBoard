const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password :conf.password,
    port : conf.port,
    database : conf.database
})

connection.connect();

app.get('/board/list', (req,res) => {
    connection.query(
        'SELECT boardNo, title, id, hit, date_format(writtenDate, "%Y-%m-%d %H:%i") AS writtenDate FROM BOARD',
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));