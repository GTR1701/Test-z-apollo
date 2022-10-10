const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    ID: { type: GraphQLInt },
    Username: { type: GraphQLString },
    Password: { type: GraphQLString },
    zalogowany: { type: GraphQLInt },
  }),
});

module.exports = UserType;
