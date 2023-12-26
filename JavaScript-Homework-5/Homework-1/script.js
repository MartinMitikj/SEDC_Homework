// ova e novo napraveno na moj nacin
let numbers = [5, 22, 43, 38, 50, 90, 100];
function sum() {
  const result = document.getElementById('result')
  let sum = 0;
  let equation = " ";
  result.innerHTML += "<ul>"
  for (let i = 0; i < numbers.length; i++) {
    result.innerHTML += `<li>${numbers[i]}</li>`;
    sum += numbers[i];
    equation += numbers[i] + " + ";
  }
  result.innerHTML += `<li>Sum: ${sum}</li>`;
  result.innerHTML += `<li>Equation:${equation}= ${sum}</li>`;
  result.innerHTML += "</ul>"
  return sum;
}  


sum();







// ova dole e staroto od chatGPT


// let numbers = [5, 22, 43, 38, 50, 90, 100];
// function sum() {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// document.write('<ul>');
// numbers.forEach(number => {
//   document.write('<li>' + number + '</li>');
// });
// document.write('</ul>');
// document.write('<p>Sum: ' + sum() + '</p>');
// document.write('<p>Equation: ' + numbers.join(' + ') + ' = ' + sum() + '</p>');