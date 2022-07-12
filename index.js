const {ApolloServer,gql}=require("apollo-server");
const { db } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const {typeDefs}=require("./schema")

const server=new ApolloServer({
   typeDefs,
   resolvers:{
      Query,
      Category,
      Product,
      Mutation
   },
   context:{
 db
   }
});
server.listen().then(({url})=>{
    console.log("Server is reday at" + url)
})