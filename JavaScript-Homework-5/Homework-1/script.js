let numbers = [5, 22, 43, 38, 50, 90, 100];
function sum() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
document.write('<ul>');
numbers.forEach(number => {
  document.write('<li>' + number + '</li>');
});
document.write('</ul>');
document.write('<p>Sum: ' + sum() + '</p>');
document.write('<p>Equation: ' + numbers.join(' + ') + ' = ' + sum() + '</p>');