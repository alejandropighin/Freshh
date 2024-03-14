
/**
 * this funtion calculated total price of a new order
 * @param {Array} products --cart product : array of products
 * @returns {number}number of total products  
 */ 

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price)
    return sum 
}