let mysql = require('mysql')
let express = require('express');
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
    type User {
        ID: Int
        Login: String
        Password: String
        Logged: Int
    }

    input UserInput {
        Name: String
        Posts: [PostInput]
    }

    input PostInput {
        Text: String
    }
`)



let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});



























// console.log(data);

// let con = mysql.createConnection({
//         host: "127.0.0.1",
//         user: "root",
//         password: "",
//         database: "logowanie"
// });

// const databaseQuery = (query) => {
//     con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         // var sql = "INSERT INTO logowanie (imie, nazwisko) VALUES ('test1', 'test1')";
//         con.query(query, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//             con.end();
//         });
//     });
// }

// databaseQuery("SELECT * FROM users")