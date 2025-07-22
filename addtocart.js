const cart = [];
const product1 = {id:1,name:"Product 1",price:100,quantity:1}
const product2 = {id:2,name:"Product 2",price:150,quantity:2}
function addToCart(product){
    const existingProductIndex = cart.findIndex(item=>item.id === product.id)
    if(existingProductIndex !== -1){
        cart[existingProductIndex.quantity] += 1;
    }
    else{
        cart.push({...product});
    }
    // console.log(`Added ${product.name} to cart. Current cart:`, cart);
}
addToCart(product1);
addToCart(product2);
console.log("Cart after adding products:", cart);