const mysql = require('mysql');

module.exports = async () => {

    let db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'database',
    })

    return db;

}
