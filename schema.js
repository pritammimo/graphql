const {ApolloServer,gql}=require("apollo-server");
 exports.typeDefs=gql`
type Query {
    hello:String,
    products(filter:ProductsFilterInput):[Product!]!,
    product(id:ID!):Product,
    categories:[Category!]!,
    category(id:ID!):Category,
    # reviews:[Review!]!
}
type Mutation{
    addCategory(input:AddCategoryInput!):Category!
}
type Product{
   name:String!,
   description:String!,
   Quantity:Int!,
   price:Float!,
   onSale:Boolean,
   image:String!,
   id:ID!,
   category:Category,
   reviews:[Review!]!
}
type Category {
    name:String!,
    id:ID!,
    products(filter:ProductsFilterInput):[Product!]!,
}
type Review{
    id: ID!,
    date:String!,
    title: String!,
    comment: String!,
    rating: Int!,
    # productId: ,
}
input ProductsFilterInput{
    onSale:Boolean,
    avgRating:Int
}
input AddCategoryInput{
    name:String!
}
`