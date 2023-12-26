const button = document.getElementById('button');
function createTable() {
  let rowInput = parseInt(prompt('How many rows would you like to create'));
  let columnInput = parseInt(prompt('How many columns would you like to create'));
  let table = `<table>`;
  for (let i = 0;i < rowInput;i++) {
    table += `<tr>`;
    for (let j = 0;j< columnInput;j++) {
      table += `<td style="border: 1px solid black">Row:` + (i + 1) + " " + `Column:` + (j + 1) + `</td>`;
    }
    table += `</tr>`;
  }
  table += `</table>`;
  document.body.innerHTML += table;
}
button.addEventListener('click',createTable);