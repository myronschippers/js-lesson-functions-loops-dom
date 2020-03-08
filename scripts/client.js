console.log('Hello Ursus');
const basket = [];

// create a function that adds a fruit to my basket
function addToBasket(fruit) {
  console.log('addToBasket!!!');
  // assuming fruit is a string
  basket.push(fruit);
}

// add some fruit to my basket
addToBasket('Orange');
addToBasket('Apple');
addToBasket('Pear');
addToBasket('Mango');
addToBasket('Kiwi');
addToBasket('Star Fruit');

// log out basket
console.log('BASKET:', basket);

// log out every piece of fruit in the basket
// How do we iterate through items in an array?
// LOOP
