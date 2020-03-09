const basket = [
  {fruit: 'Orange', price: 0.2 },
  {fruit: 'Apple', price: 0.2},
  {fruit: 'Pear', price: 0.2},
  {fruit: 'Mango', price: 0.2},
  {fruit: 'Kiwi', price: 0.2},
  {fruit: 'Star Fruit', price: 0.2}
];

$(document).ready(onReady);
// onReady()

function onReady() {
  $('#jsAddFruit').on('click', clickAddFruit);

  printFruitInBasket();
}

// let's add price to our fruit
function clickAddFruit(event) {
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
  // assuming fruit is a string
  basket.push({
    fruit: fruit,
    price: price,
  });
}

// log out basket
console.log('BASKET:', basket);

// log out every piece of fruit in the basket
// LOOP
console.log(basket[1]) // logs second item

// for i
function printFruitInBasket() {
  const $basket = $('#jsBasket');
  const $totalPrice = $('#jsTotalPrice');
  let sumOfPrice = 0;

  $basket.empty();
  for (let i = 0; i < basket.length; i++) {
    const valueOfItem = basket[i];
    sumOfPrice = sumOfPrice + valueOfItem.price;
    // instead of logging add to DOM
    $basket.append(`<li>${valueOfItem.fruit}</li>`);
  }

  $totalPrice.empty();
  $totalPrice.append(`$${sumOfPrice}`)
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
