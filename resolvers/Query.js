
exports.Query={
    hello:()=>{
        return "World !!!!"
    },
    products:(parent,{filter},{db})=>{
        let filteredProducts=db.products;
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
        db.reviews.forEach(review =>{
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
    product:(parent,args,{db})=>{
     const {id}=args;
     return db.products.find(product =>product.id === id)
    },
    categories:(parent,args,{db})=>{
        return db.categories
    },
    category:(parent,args,{db})=>{
        const {id}=args;
        return db.categories.find(category =>category.id === id)
       },
}