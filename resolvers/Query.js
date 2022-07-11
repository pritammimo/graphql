


exports.Query={
    hello:()=>{
        return "World !!!!"
    },
    products:(parent,args,{products})=>{
        return products
    },
    product:(parent,args,{products})=>{
     const {id}=args;
     return products.find(product =>product.id === id)
    },
    categories:(parent,args,{categories})=>{
        return categories
    },
    category:(parent,args,{categories})=>{
        const {id}=args;
      
        return categories.find(category =>category.id === id)
     
       
       },
}