// // Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('bread', 5);
add('pizza', 2);
add('apple', 4);

console.log(cart);
