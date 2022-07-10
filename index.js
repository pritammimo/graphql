const {ApolloServer,gql}=require("apollo-server");
const typeDefs=gql`
type Query {
    hello:String,
    numberOfAnimals:Int,
    price:Float,
    isCool:Boolean,
    isArray:[String !]!
}
`
const resolvers={
    Query:{
        hello:()=>{
            return "World !!!!"
        },
        numberOfAnimals:()=>{
            return 5
        },
        price:()=>{
            return 10.43
        },
        isCool:()=>false,
        isArray:()=>{
            return ["Hello","world","test"]
        }
    }
}
const server=new ApolloServer({
   typeDefs,
   resolvers
});
server.listen().then(({url})=>{
    console.log("Server is reday at" + url)
})