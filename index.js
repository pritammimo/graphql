const {ApolloServer,gql}=require("apollo-server");
const { products, categories } = require("./db");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const {typeDefs}=require("./schema")

const server=new ApolloServer({
   typeDefs,
   resolvers:{
      Query,
      Category,
      Product
   }
});
server.listen().then(({url})=>{
    console.log("Server is reday at" + url)
})