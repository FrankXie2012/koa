const mysql = require('mysql')
const config = require('../config')
const {logger} = require('../middlewares/logger')
const pool = mysql.createPool(config.mysql)

class Mysql {
  constructor() {}
  query(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          logger.error(new Error(error))
          throw error
        }
        resolve(results)
      })
    })
  }
}

module.exports = new Mysql()
