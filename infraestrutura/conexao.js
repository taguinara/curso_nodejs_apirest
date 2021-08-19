const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: ,
    user: 'root',
    password: ,
    database: 'agenda-petshop'
})

module.exports = conexao
