console.log('Hello Ursus');
const basket = [];

$(document).ready(onReady);
// onReady()

function onReady() {
  // console.log('I\'m ready');
  $('#jsAddFruit').on('click', clickAddFruit);
}

// let's add price to our fruit
function clickAddFruit(event) {
  console.log('CLICKED!!!');
  const fruitName = $('#jsFruit').val();
  const fruitPrice = $('#jsPrice').val();

  addToBasket(fruitName, fruitPrice);
  // let's clear out the form field
  $('#jsFruit').val('');
  $('#jsPrice').val('');

  // print the contents of our basket array
  printFruitInBasket();
}

// create a function that adds a fruit to my basket
function addToBasket(fruit, price) {
  console.log('addToBasket!!!');
  // assuming fruit is a string
  basket.push({
    fruit: fruit,
    price: price,
  });
}

// add some fruit to my basket
// addToBasket('Orange');
// addToBasket('Apple');
// addToBasket('Pear');
// addToBasket('Mango');
// addToBasket('Kiwi');
// addToBasket('Star Fruit');

// log out basket
console.log('BASKET:', basket);

// log out every piece of fruit in the basket
// LOOP
console.log(basket[1]) // logs second item

// for i
function printFruitInBasket() {
  const $basket = $('#jsBasket');
  // TODO: Sum all of the prices to get a total
  let sumOfPrice = 0;

  $basket.empty();
  // console.log('\nfor i LOOP:');
  for (let i = 0; i < basket.length; i++) {
    const valueOfItem = basket[i];
    sumOfPrice = sumOfPrice + valueOfItem.price;
    // console.log(valueOfItem);
    // instead of logging add to DOM
    $basket.append(`<li>${valueOfItem.fruit}</li>`);
  }
  console.log('Total Price:', sumOfPrice);

  // TODO: Must print sumOfPrice to the DOM
}

// for of
// console.log('\nfor of LOOP:');
// for (let valueOfItem2 of basket) {
//   console.log(valueOfItem2);
// }

// for in
// console.log('\nfor i LOOP:');
// for (let indexOfItem3 in basket) {
//   console.log(basket[indexOfItem3]);
// }
