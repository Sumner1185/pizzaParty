function numberOfSlices(people, pizza) {
  return Math.floor((pizza * 8) / people)
 }

//  function remainingSlices(people, pizza) {

//  }

 function getInfo(people, pizza) {
  let slices = numberOfSlices(people, pizza)
  let result = `${people} people with ${pizza} pizzas.\n
  Each person gets ${slices} pieces of pizza.\n`
  return result
 }

 function DisplayFunction() {
    let people = window.prompt('How many people?')
    let pizza = window.prompt('How many pizzas do you have?')
    let result;
    result = getInfo(people, pizza);
    document.write (result);
 }