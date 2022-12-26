"use strict"

function solveEquation(a, b, c) {
  const discr = Math.pow(b, 2) - 4*a*c;

  if (discr < 0)
  { return []; }
  if (discr === 0) {
    let root = -b/(2*a);
    return [root];
  }
  if (discr > 0) {
    return [(-b + Math.sqrt(discr) )/(2*a), (-b - Math.sqrt(discr) )/(2*a)]
  }
}

solveEquation(-5,-10,5);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let payment;
  let sumCount;
  let monthPer = percent / 100 / 12;
  let bodyCount = amount - contribution;

  if ( isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return console.log('Value is not a number');
  }

  payment = bodyCount * (monthPer + monthPer / ((1 + monthPer) ** countMonths - 1));
  sumCount = parseFloat((payment * countMonths).toFixed(2));
   Math.floor(sumCount * 100) / 100;
  return sumCount; 
  
}
calculateTotalMortgage(10, 15, 7000, 3)