const { reviews } = require("../db");



exports.Query={
    hello:()=>{
        return "World !!!!"
    },
    products:(parent,{filter},{products})=>{
        let filteredProducts=products;
        if(filter){
            const {onSale,avgRating}=filter
          if(onSale){
            console.log("ok");
            filteredProducts=filteredProducts.filter(product =>{
                return product.onSale
            })
          }
          if([1,2,3,4,5].includes(avgRating)){
    filteredProducts=filteredProducts.filter((product)=>{
        let sumRating =0;
        let numberofReviews=0
        reviews.forEach(review =>{
            if(review.productId === product.id) {
                sumRating+=review.rating;
                numberofReviews++
            }
        })
       const avgProductRating=sumRating/numberofReviews
       return avgProductRating>=avgRating;
    })
          }
        }
        return filteredProducts
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