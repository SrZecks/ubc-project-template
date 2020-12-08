const mysql = require('mysql')
const config = require('./config')

// MariaDB conn
const poolJson = {
    'database': mariadb.createPool(config.database)
}

module.exports = poolJson