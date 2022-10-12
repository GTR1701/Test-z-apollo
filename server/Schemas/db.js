let mysql = require('mysql')
class dbQuery{
  constructor(){
    this.con = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "",
       database: "logowanie"
     });

  }
    
   databaseQuery = () => { 
      this.con.connect()
      let temp = this.con.query("SELECT * FROM users", function (err, rows) {
        if (err) throw err;
        console.log(rows);
        console.log("-------------")
        temp = rows
        return rows
      });
      this.con.end();
      return temp
  }
}

module.exports = dbQuery