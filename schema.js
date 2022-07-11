const {ApolloServer,gql}=require("apollo-server");
 exports.typeDefs=gql`
type Query {
    hello:String,
    products:[Product!]!,
    product(id:ID!):Product,
    categories:[Category!]!,
    category(id:ID!):Category
}
type Product{
   name:String!,
   description:String!,
   Quantity:Int!,
   price:Float!,
   onSale:Boolean,
   image:String!,
   id:ID!,
   category:Category
}
type Category {
    name:String!,
    id:ID!,
    products:[Product!]!,
}
`