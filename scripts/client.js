console.log('Hello Ursus');
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
  // console.log('I\'m ready');
  $('#jsAddFruit').on('click', clickAddFruit);
  printFruitInBasket();
}

function clickAddFruit(event) {
  // console.log('CLICKED!!!');
  const fruitName = $('#jsFruit').val();
  const fruitPrice = $('#jsPrice').val();

  addToBasket(fruitName, fruitPrice);
  // $('#jsFruit').val('');
  // $('#jsPrice').val('');
}

// create a function that adds a fruit to my basket
function addToBasket(fruit, price) {
  // console.log('addTiBasket!!!');
  // console.log(fruit);
  // assuming fruit is a string
  basket.push({
    fruit: fruit,
    price: parseFloat(price),
  });

  printFruitInBasket();
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
  const $totalPrice = $('#jsTotalPrice');
  let priceSum = 0;

  $basket.empty();
  console.log('\nfor i LOOP:');
  for (let i = 0; i < basket.length; i++) {
    const valueOfItem = basket[i];
    priceSum = priceSum + valueOfItem.price;
    
    // instead of logging add to DOM
    console.log(valueOfItem);
    $basket.append(`<li>${valueOfItem.fruit}</li>`);
  }

  $totalPrice.empty();
  $totalPrice.append('$' + priceSum);
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
