const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList,} = graphql;
let mysql = require('mysql')

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "logowanie"
});

let resultObject = []

con.connect()

con.query("SELECT * FROM users", function (err, rows) {
  if (err) throw err;
    console.log(rows);
      console.log("-------------")
      resultObject.push(rows)
      console.log(resultObject)
  con.end();
});

let userData = resultObject
console.log("Test")
console.log(userData)

const UserType = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
