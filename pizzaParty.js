const SLICES_PER_PIZZA = 8

function numberOfSlices(people, pizza) {
  return Math.floor((pizza * SLICES_PER_PIZZA) / people)
 }

 function remainingSlices(people, pizza) {
  return (pizza * SLICES_PER_PIZZA) % people
 }

 function displayResults(people, pizza) {
  let slices = numberOfSlices(people, pizza)
  let leftOvers = remainingSlices(people, pizza)
  let firstLine = `${people} people with ${pizza} pizzas.`
  let secondLine = `Each person gets ${slices} pieces of pizza.`
  let thirdLine = `There are ${leftOvers} leftover pieces.`

  return `${firstLine}\n${secondLine}\n${thirdLine}`
 }

 function getInfo() {
    let people = window.prompt('How many people?')
    let pizza = window.prompt('How many pizzas do you have?')
    let result = displayResults(people, pizza);

    return result
    // document.write (result);
 }