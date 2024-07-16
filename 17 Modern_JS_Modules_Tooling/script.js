// importing modules y cambiando el nombre
/* import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

console.log('Importing Module');

addToCart('bread', 5);
console.log(price, qt);

// Importando todo como un objeto
import * as shoppingCart from './shoppingCart.js';
console.log(shoppingCart);
shoppingCart.addToCart('bread', 10);

// Importacion default
import add from './shoppingCart.js';
add('bread', 20);

import { cart } from './shoppingCart.js';
console.log(cart);
 */

/* console.log('Start fetch');
const result = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await result.json();
console.log(data);
console.log('Something'); */

const getLastPost = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
